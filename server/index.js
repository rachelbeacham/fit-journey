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
      res.status(200).json(result.rows);
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
         "setId"
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
      res.status(200).json(result.rows);
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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
