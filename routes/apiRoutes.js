const notes = require("../db/db.json");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => res.json(notes));

    

    app.post("api/notes", (req, res) => {

        var randomId = Math.floor(Math.random() * 1000);

        notes.push(req.body);
        console.log(body);
    });

};