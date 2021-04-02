const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const app = express();
const port = 3100;

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})