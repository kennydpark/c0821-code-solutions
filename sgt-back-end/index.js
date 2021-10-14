const pg = require('pg');
const express = require('./node_modules/express/lib/express');
const app = express();
const middleware = express.json();
app.use(middleware);
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const sql = `
    insert into "grades"
    ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
  const values = [req.body.name, req.body.course, req.body.score];
  if ((req.body.score < 0) || (req.body.score > 100)) {
    res.status(400).json({
      error: 'The score must be an integer from 0 to 100.'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: 'Missing property: name.'
    });
  } else if (!req.body.course) {
    res.status(400).json({
      error: 'Missing property: course.'
    });
    return;
  } else if (!req.body.score) {
    res.status(400).json({
      error: 'Missing property: score.'
    });
    return;
  }
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if ((req.body.score < 0) || (req.body.score > 100)) {
    res.status(400).json({
      error: 'The score must be an integer from 0 to 100.'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: 'Missing property: name.'
    });
  } else if (!req.body.course) {
    res.status(400).json({
      error: 'Missing property: course.'
    });
    return;
  } else if (!req.body.score) {
    res.status(400).json({
      error: 'Missing property: score.'
    });
    return;
  }
  const sql = `
    update "grades"
    set "name" = $2,
        "course" = $3,
        "score" = $4
    where "gradeId" = $1
    returning *;
    `;
  const values = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const values = [gradeId];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
