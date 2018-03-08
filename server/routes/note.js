module.exports = (app, db) => {
  app.post("/note", (req, res) => {
    const { body } = req;
    const { title, text } = body;

    const newNote = {
      text,
      title
    };

    db.collection("notes").insert(newNote, (err, results) => {
      if (err) return console.log("error!", err);

      console.log(
        `successfully created a note with title ${newNote.text}`,
        results
      );
    });

    res.status(200).send(newNote);
  });

  app.get("/note", (req, res) => {
    db.collection("notes").find({}).toArray((err, allNotes) => {
      if (err) throw new Error(err);

      res.status(200).send(allNotes)
    });
  })
};
