const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  const fileData = data;
  fs.writeFile(process.argv[3], fileData, err => {
    if (err) throw err;
  });
});
