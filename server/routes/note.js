module.exports = (app, db) => {
  app.post("/note", (req, res) => {
    const { body } = req;
    res.status(200).send(body);
  });
};
