require('dotenv/config');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');
const formatDate = require('../client/lib/formatDate');
const ClientError = require('./client-error');
const jwt = require('jsonwebtoken');
const express = require('express');
const argon2 = require('argon2');
const path = require('path');
const pg = require('pg');

const app = express();
const jsonMiddleware = express.json();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(staticMiddleware);
app.use(jsonMiddleware);

app.post('/api/sign-up', (req, res, next) => {
  const { email, username, password } = req.body;
  argon2
    .hash(password)
    .then(hashedpassword => {
      const sql = `
        insert into "users" ("userEmail", "username", "hashedPassword")
        values ($1, $2, $3)
        returning "userId"
      `;
      const params = [email, username, hashedpassword];
      return db.query(sql, params)
        .then(result => {
          res.status(201).json(result.rows[0]);
        });
    })
    .catch(err => next(err));
});

app.post('/api/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  const sql = `
    select "userId",
           "hashedPassword"
      from "users"
     where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const user = result.rows[0];
      if (!user) {
        throw new ClientError(401, 'invalid login');
      }
      const { userId, hashedPassword } = user;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if (!isMatching) {
            throw new ClientError(401, 'invalid login');
          }
          const payload = { userId, username };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          const response = {
            token,
            user: payload
          };
          res.status(200).json(response);
        });
    })
    .catch(err => next(err));
});

app.get('/api/users/:id', (req, res, next) => {
  const userId = req.params.id;
  const params = [userId];
  const sql = `
    select "userName",
           "currentWeight",
           "profilePictureUrl"
      from "users"
     where "userId" = $1
  `;
  db.query(sql, params)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/exercises', (req, res, next) => {
  const sql = `
    select *
    from   "exercises"
    join   "muscleGroups" using ("muscleGroupId")
  order by "exerciseName"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/exercises/:id', (req, res, next) => {
  const id = req.params.id;
  const sql = `
    select *
    from   "exercises"
    join   "muscleGroups" using ("muscleGroupId")
    where  "muscleName" = $1
  order by "exerciseName"
  `;
  const params = [id];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/workouts/:id', (req, res, next) => {
  const id = req.params.id;
  const sql = `
  select "workoutDate",
         "workoutDuration",
         "workoutId"
    from "workouts"
   where "userId" = $1
  `;
  const params = [id];
  db.query(sql, params)
    .then(result => {
      const data = result.rows.map(each => {
        each.workoutDate = formatDate(each.workoutDate);
        return each;
      });
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.get('/api/sets/:id', (req, res, next) => {
  const id = req.params.id;
  const sql = `
  select "exerciseId",
         "exerciseName",
         "reps",
         "weight",
         "setId",
         "workoutDate"
    from "workouts"
    join "exerciseSets" using ("workoutId")
    join "exercises" using ("exerciseId")
    join "sets" using ("setId")
   where "workoutId" = $1
order by "setId"
  `;
  const params = [id];
  db.query(sql, params)
    .then(result => {
      const data = result.rows.map(each => {
        each.workoutDate = formatDate(each.workoutDate);
        return each;
      });
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.post('/api/workouts', (req, res, next) => {
  const { date, duration, userId } = req.body;
  const sql = `
    insert into "workouts" ("workoutDate", "workoutDuration", "userId")
    values ($1, $2, $3)
    returning "workoutId"
  `;
  const params = [date, duration, userId];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.post('/api/customWorkouts/:id', (req, res, next) => {
  const workoutId = req.params.id;
  const { name, type } = req.body;
  const sql = `
    insert into "customWorkouts" ("workoutId", "customWorkoutName", "type")
    values ($1, $2, $3)
    returning *
  `;
  const params = [workoutId, name, type];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.post('/api/sets', (req, res, next) => {
  const { reps, weight, exerciseId, workoutId } = req.body;
  const params = [reps, weight, workoutId, exerciseId];
  const query = `with "insertedSet" as (
    insert into "sets"("reps", "weight")
    values($1, $2)
    returning "setId"
  )
  insert into "exerciseSets"("workoutId", "exerciseId", "setId")
  values($3, $4, (select "setId" from "insertedSet"))
  returning *`;

  db.query(query, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.post('/api/goals/:id', (req, res, next) => {
  const userId = req.params.id;
  const { goalDescription, completed } = req.body;
  const params = [goalDescription, completed, userId];
  const sql = `
    insert into "goals" ("goalDescription", "completed", "userId")
    values ($1, $2, $3)
    returning *
  `;
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.patch('/api/users/:id', uploadsMiddleware, (req, res, next) => {
  const userId = req.params.id;
  const { name, currentWeight } = req.body;
  let url = null;
  if (req.file) {
    url = path.join('/images', req.file.filename);
  }
  let sql;
  let params;
  if (url) {
    params = [name, currentWeight, url, userId];
    sql = `
    update "users"
       set "userName"          = $1,
           "currentWeight"     = $2,
           "profilePictureUrl" = $3
     where "userId"            = $4
     returning *
  `;
  } else {
    params = [name, currentWeight, userId];
    sql = `
    update "users"
       set "userName"          = $1,
           "currentWeight"     = $2
     where "userId"            = $3
     returning *
  `;
  }
  db.query(sql, params)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
