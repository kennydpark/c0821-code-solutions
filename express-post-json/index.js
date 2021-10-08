const express = require('./node_modules/express/lib/express');
const app = express();

let nextId = 1;
const grades = {};
const gradesArray = [];
const parsed = express.json();

app.get('/api/grades', (req, res) => {
  for (var key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(parsed);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  res.status(201).send(req.body);
  nextId++;
  gradesArray.push(req.body);
  res.json(gradesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
