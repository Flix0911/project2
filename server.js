// ----
//Dependencies
// ----
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

// ----
//dot .env variables
// ----
const {DATABASE_URL, SECRET, PORT} = process.env

// ----
//Database connection
// ----
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => console.log("Connectioned to Mongoose"))
mongoose.connection
.on("close", () => console.log("Disconnectioned from Mongoose"))
mongoose.connection
.on("error", (error) => console.log(error))

// ----
//Create app object
// ----
const app = express()

// ----
//Routes
// ----
app.get("/", (req, res) => {
    res.send("It is workin")
})

// ----
//Turn on server
// ----
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})