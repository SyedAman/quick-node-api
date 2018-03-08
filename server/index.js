const express = require("express");

const app = express();
const port = 9000;
const database = {};

require('./routes')(app, database);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
