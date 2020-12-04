// DEPENDENCIES
const fs = require("fs");
const path = require("path");
// FOR UUID
const { v4: uuidv4 } = require('uuid');

const dbLink = path.join(__dirname, "../db/db.json");

// NOTES PLACEHOLDER ARRAY
let notesPlaceholder = [];

module.exports = app => {
    app.get("/api/notes"), (req, res) => {
        fs.readFile(dbLink, "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                notesPlaceholder = JSON.parse(data);
                res.JSON(notesPlaceholder)
            }
        })
    }
}

