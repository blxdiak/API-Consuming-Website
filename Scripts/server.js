const express = require ("express");
const app = express();
const path = require("path");

const webPages = path.join(__dirname, "../Website");

const PORT = 3000;

// Random stuff
const staticDirectories = ["Styles", "Images", "Scripts", "Modules"];

staticDirectories.forEach(directory => {
    app.use(`/${directory}`, express.static(path.join(__dirname, `../${directory}`)));
})

//Routes
app.get("/", (req, res) => {
    res.sendFile(webPages + "/Home.html");
})

app.get("/Quotable", (req, res) => {
    res.sendFile(webPages + "/Quotable.html");
})

app.get("/Boredom", (req, res) => {
    res.sendFile(webPages + "/Boredom.html");
})

app.get("/DogFacts", (req, res) => {
    res.sendFile(webPages + "/DogFacts.html");
})

app.get("/Riddles", (req, res) => {
    res.sendFile(webPages + "/Riddles.html");
})

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
})