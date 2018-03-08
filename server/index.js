const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;

const db = require("./config/db");

const app = express();
app.use(bodyParser.json());

const port = 9000;

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  
  require("./routes")(app, database);

  app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });
})

