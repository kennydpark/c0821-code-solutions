const express = require('express');
const path = require('path');
const app = express();

const pathJoin = path.join(__dirname, 'public');
console.log('path.join():', pathJoin);
const expressStatic = express.static(pathJoin);
console.log('express.static():', expressStatic);
app.use(expressStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
