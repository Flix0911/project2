//dependencies

//bring in mongoose
const mongoose = require("mongoose")

//connect to database
mongoose.connect(process.env.DATABASE_URL)

//connect status listeners
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
mongoose.connection
.on("close", () => console.log("Disconnectioned from Mongoose"))
mongoose.connection
.on("error", (error) => console.log(error))