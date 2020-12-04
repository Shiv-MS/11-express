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
    // app.post("/api/notes", async (req, res) => {
    //     const newNote = req.body;
    //     newNote.id = uuidv4()
    //     console.log(newNote);
    //     // This is where I need to write to the Json file
    //     fs.readFile(dbLink, "utf8", (err, data) => {
    //         console.log(data)
    //     })
    //     console.log(old_data)
    //     // Modify the array thta comes back from read file
    //     old_data.push(newNote);
    //     await fs.writeFile(dbLink, old_data "utf8")
    //     let new_write = JSON.parse(await fs.readFile(dbLink, "utf-8"))
    //     res.json(new_write)

    // });
    // app.delete("/api/notes", (req, res) => {

    // })
}

