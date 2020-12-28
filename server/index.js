require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');
const errorMiddleware = require('./error-middleware');

const app = express();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(staticMiddleware);

app.get('/api/exercises', (req, res, next) => {
  const sql = `
    select "exerciseName",
           "muscleName"
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
  let id = req.params.id;
  let sql;
  if (id.length > 1) {
    sql = `
    select "exerciseName",
           "muscleName"
    from   "exercises"
    join   "muscleGroups" using ("muscleGroupId")
    where  "muscleName" = $1
  order by "exerciseName"
  `;
  } else {
    id = parseInt(id);
    sql = `
    select *
    from   "exercises"
    where  "exerciseId" = $1
  `;
  }
  const params = [id];
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
