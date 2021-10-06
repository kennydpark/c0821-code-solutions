const fs = require('fs');

const data = Math.random();
const dataString = data.toString();
fs.writeFile('random.txt', dataString, err => {
  if (err) throw err;
});
