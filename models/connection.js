//Dependencies
require("dotenv").configDotenv()
const mongoose = require("mongoose")

//Establish connection
//Grab url from .env
const DATABASE_URL = process.env.DATABASE_URL


//establish connection
mongoose.connect(DATABASE_URL)

//connection events
mongoose.connection
.on("open", () => {console.log("Connected to Mongoose")})
.on("close", () => {console.log("Disconnected from Mongoose")})
.on("error", (error) => {console.log(error)})

//export
module.exports = mongoose