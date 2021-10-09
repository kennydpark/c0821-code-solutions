const express = require('./node_modules/express/lib/express');
const app = express();

let nextId = 1;
const grades = {};
const parsed = express.json();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (var key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(parsed);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
