const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const databaseConfig = require('./config');

const app = express();
app.use(bodyParser.json());

const port = 9000;

MongoClient.connect(databaseConfig.url, (err, database) => {
	if (err) return console.log(err);

	require('./routes')(app, database.db('note-api'));

	app.listen(port, () => {
		console.log(`server running on http://localhost:${port}`);
	});
});
