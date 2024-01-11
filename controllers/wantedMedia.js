//Dependencies

const express = require("express")
const router = express.Router()
const Media = require("../models/Media")

// ----
//Routes

//Index - GET - Bring to index page of wantedMedia
router.get("/", (req, res) => {
    res.render("wantedmedia/index.ejs")
})

// I DON'T BELIEVE I NEED ANYTHING ELSE? I SHOULD BE ABLE TO HANDLE THE LOGIC IN OWNEDMEDIA BUT TBD

//Show - GET - Bring to show.ejs from wantedMedia Index




//export the router
module.exports = router