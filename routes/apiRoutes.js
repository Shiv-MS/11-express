// DEPENDENCIES
const fs = require("fs")
const path = require("path");
// FOR UUID
const { v4: uuidv4 } = require('uuid');

const dbLink = path.join(__dirname, "../db/db.json");

// NOTES PLACEHOLDER ARRAY
let notesPlaceholder = [];

module.exports = app => {
    app.get("/api/notes", (req, res) => {
        fs.readFile(dbLink, "utf8", (err, data) => {
            if (err) {
                console.log(err);
                res.json(err)
            } else {
                notesPlaceholder = JSON.parse(data);
                res.json(notesPlaceholder)
            }
        })
    });
    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        const id = uuidv4();
        newNote.id = id;
        console.log(newNote);
        // newNote.id = uuidv4()
        // This is where I need to write to the Json file
        fs.readFile(dbLink, "utf8", (err, data) => {
            console.log(data)
            const notes = JSON.parse(data)
            notes.push(newNote)
            // Modify the array that comes back from read file
            JSON.parse(data).push(newNote);
            fs.writeFile(dbLink, JSON.stringify(notes), (err) => {
                console.log(err)
                res.send("Database Updated")
            })
            // let new_write = JSON.parse(fs.readFile(dbLink, "utf-8"))
            // res.json(new_write)
        })
    });
    // app.delete("/api/notes/:id", (req, res) => {

    // })
}

