//Dependencies

const express = require("express")
const router = express.Router()
const Media = require("../models/Media")

// ----
//Routes

//Index - GET - Bring to index page of ownedMedia
router.get("/", async (req, res) => {
    const medias = await Media.find({})
    res.render("ownedmedia/index.ejs", {medias})
})

//New - GET - Brings to the form to make a NEW ownedMedia

//Destroy - DELETE - Remove the ownedMedia that was clicked

//Update - PUT - Return updated ownedMedia to the ._id indicated

//Create - POST - Return back to OwnedMedia index with an additional OwnedMedia

//Edit - GET - Bring to edit.ejs from show.ejs

//Show - GET - Bring to show.ejs from the ownedMedia Index


//Export the router
module.exports = router