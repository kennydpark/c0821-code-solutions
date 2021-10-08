const express = require('./node_modules/express/lib/express');

const app = express();

app.use(function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});