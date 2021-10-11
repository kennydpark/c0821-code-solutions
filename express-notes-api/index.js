const express = require('./node_modules/express/lib/express');
const data = require('./data.json');
const fs = require('fs');
const app = express();
const parsed = express.json();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (var key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0) {
    const errorBadRequest = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(errorBadRequest);
  } else if (data.notes[req.params.id]) {
    res.status(200).json(data.notes[req.params.id]);
  } else if (!(data.notes[req.params.id])) {
    const errorNotFound = {
      error: 'cannot find note with id ' + req.params.id
    };
    res.status(404).json(errorNotFound);
  }
});

app.use(parsed);

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    const errorBadRequest = {
      error: 'content is a required field'
    };
    res.status(400).json(errorBadRequest);
  } else if (req.body.content) {
    const newNote = req.body;
    const id = data.nextId;
    data.notes[id] = newNote;
    data.notes[id].id = id;
    data.nextId++;
    const serializedData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', serializedData, err => {
      const errorGeneric = {
        error: 'An unexpected error occurred.'
      };
      if (err) {
        res.status(500).json(errorGeneric);
      } else {
        res.status(201).json(data.notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0) {
    const errorBadRequest = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(errorBadRequest);
  } else if (!(data.notes[req.params.id])) {
    const errorNotFound = {
      error: 'cannot find note with id ' + req.params.id
    };
    res.status(404).json(errorNotFound);
  } else if (data.notes[req.params.id]) {
    delete data.notes[req.params.id];
    const serializedData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', serializedData, err => {
      const errorGeneric = {
        error: 'An unexpected error occurred.'
      };
      if (err) {
        res.status(500).json(errorGeneric);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0) {
    const errorBadId = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(errorBadId);
  } else if (!req.body.content) {
    const errorMissingContent = {
      error: 'content is a required field'
    };
    res.status(400).json(errorMissingContent);
  } else if (!(data.notes[req.params.id])) {
    const errorNotFound = {
      error: 'cannot find note with id ' + req.params.id
    };
    res.status(404).json(errorNotFound);
  } else if (data.notes[req.params.id]) {
    const newNote = req.body;
    data.notes[req.params.id] = newNote;
    data.notes[req.params.id].id = parseInt(req.params.id);
    const serializedData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', serializedData, err => {
      const errorGeneric = {
        error: 'An unexpected error occurred.'
      };
      if (err) {
        res.status(500).json(errorGeneric);
      } else {
        res.status(201).json(data.notes[req.params.id]);
      }
    });
  }
});
