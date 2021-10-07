const fs = require('fs');
const dj = require('./data.json');
const operation = process.argv[2];
const argument = process.argv[3];
const argument2 = process.argv[4];

if (operation === 'read') {
  for (var key in dj.notes) {
    console.log(key + ': ' + dj.notes[key]);
  }
} else if (operation === 'create') {
  const nextIdValue = dj.nextId;
  dj.notes[nextIdValue] = argument;
  dj.nextId++;
  const serializedDj = JSON.stringify(dj, null, 2);
  fs.writeFile('data.json', serializedDj, err => {
    if (err) throw err;
  });
} else if (operation === 'delete') {
  delete dj.notes[argument];
  const serializedDj = JSON.stringify(dj, null, 2);
  fs.writeFile('data.json', serializedDj, err => {
    if (err) throw err;
  });
} else if (operation === 'update') {
  dj.notes[argument] = argument2;
  const serializedDj = JSON.stringify(dj, null, 2);
  fs.writeFile('data.json', serializedDj, err => {
    if (err) throw err;
  });
}
