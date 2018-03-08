module.exports = (app, db) => {
    app.post('/note', (req, res) => {
        res.status(200).send('note created!')
    })
};
