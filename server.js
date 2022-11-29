// require internal and external modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./routesjs/routes')

// set up express as object and direct the port
const app = express();
const PORT = 3001;

// middleware for parsing json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// points to public directory
app.use(express.static("public"));

// point express to listen at the directed port, provide feedback to user via console log
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})
