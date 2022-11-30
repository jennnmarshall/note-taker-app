// require internal and external modules
const express = require('express');
const fs = require('fs');
const path = require('path');
// const routes = require('./routesjs/routes')
const notesDb = require('./db/db.json')
const notesRouter = require('./routesjs/notesRouter')

// set up express as object and direct the port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware for parsing json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// points to public directory
app.use(express.static("public"));
app.use('/api', notesRouter);

// view html files when paths are accessed
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})



// point express to listen at the directed port, provide feedback to user via console log
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})
