//REQS
// landing page with with link to notes page
//landing page needs rout to notes page and reverse
//notes page has existing notes listed in left-hand column
//notes page has empty fields to enter new note title and notes text in right hand column
//when text is entered into notes title or notes save button apeares in nav bar
//when save note should apear in left hand column
//when clicking on a note in left hand column it apears in right hand column
//write icon at top of page should add new empty note in right hand collumn


//to do
//db.json file for all notes on back end using fs module
//ROUTES
//GET/notes should return the notes.html file
//GET * should return the index.html file
//API ROUTES
//GET/api/notes should read the db.json fiile and return all saved notes as JSON
//POST/api/notes should recieve a new note, add it to the db,and return the new note to client
//need npm package to add ids to notes
const { clog } = require('./middleware/clog');

const FS = require("fs");
const express = require("express");
const path = require("path");
const app = express();


const PORT = process.env.port || 8080;
app.use(clog);

app.use(express.static('public'));

//rout for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"/public/pages/index.html"));
});

//route for /notes before anything else

app.get("/notes", (req,res) => {
  res.sendFile(path.join(__dirname, "/public/pages/notes.html"));
});

//route for 404 page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pages/404.html"))
});

app.listen(PORT, () =>{
  console.log(`app now listening on port: http://localhost:${PORT}`)
});