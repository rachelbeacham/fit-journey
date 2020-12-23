require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');

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
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
