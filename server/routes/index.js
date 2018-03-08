const note = require("./note");

module.exports = (app, db) => {
  app.get('/', (req, res) => {
    res.send("Notes API");
  })

  note(app, db);
};
