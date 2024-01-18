// ----
//Dependencies
// ----
require("dotenv").config();
require("./config/db");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const ownedMediaRouter = require("./controllers/ownedmedia.js");
const wantedMediaRouter = require("./controllers/wantedMedia.js");

// ----
//dot .env variables
// ----
const {DATABASE_URL, SECRET, PORT} = process.env



// ----
//Create app object
// ----
const app = express();

//import Media route
const Media = require("./models/Media");

// ----
//Middleware
// ----
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static("public"));
app.use("/images", express.static("images"));
app.use("/owned", ownedMediaRouter);
app.use("/wanted", wantedMediaRouter);

// ----
//Routes
// ----
app.get("/", (req, res) => {
    res.render("landing/landing.ejs")
})

// ----
//Turn on server
// ----
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})