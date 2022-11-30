// require external and internal packages
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");
const newId = require("../helpers/newId");
// allows for modular routing
const api = require("express").Router();

// parses the json file to be read
api.get("/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  res.json(notes);
});

// newid works, is adding to db, is not posting to
api.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: newId(),
  };

  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  notes.push(newNote);
  
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));

  res.json(notes);
});

api.delete("/notes/:id", (req, res) => {

    let noteId = req.params.id.toString();

  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  const newNotes = notes.filter(note => note.id.toString() !== noteId)

  fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));
  res.json(newNotes);
});

module.exports = api;
