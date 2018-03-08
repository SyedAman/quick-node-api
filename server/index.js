const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const database = {};
require("./routes")(app, database);

const port = 9000;

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
