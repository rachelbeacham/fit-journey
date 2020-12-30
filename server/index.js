require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');
const errorMiddleware = require('./error-middleware');

const app = express();
const jsonMiddleware = express.json();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(staticMiddleware);
app.use(jsonMiddleware);

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

app.put('/api/workouts', (req, res, next) => {
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

app.put('/api/sets', (req, res, next) => {
  const { reps, weight } = req.body;
  const sql = `
    insert into "sets" ("reps", "weight")
    values ($1, $2)
    returning "setId"
  `;
  const params = [reps, weight];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
