//REQS
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
//GET/api/notes should read the db.json file and return all saved notes as JSON
//POST/api/notes should recieve a new note, add it to the db,and return the new note to client
//need npm package to add ids to notes
const { clog } = require('./middleware/clog');

const FS = require("fs");
const express = require("express");
const path = require("path");
const app = express();

//fs utils helpers, got from bootcamp, this is extremely helpfull for the reading and writing of these files especialy the json
const { readFromFile, writeToFile, readAndAppend } = require("./tools/fsUtils.js")

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


function readnotes(){
  readFromFile("./db/db.json").then((data) => {
    let notes_contents = JSON.parse(data);
    console.log(notes_contents);
  });
}


readnotes()

app.listen(PORT, () =>{
  console.log(`app now listening on port: http://localhost:${PORT}`)
});




// function writeNote(){

// }