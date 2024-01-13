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
router.get("/new", (req, res) => {
    //Bring to new form
    res.render("ownedmedia/new.ejs")
})

//Destroy - DELETE - Remove the ownedMedia that was clicked

//Update - PUT - Return updated ownedMedia to the ._id indicated
router.put("/:id", async (req, res) => {
    try {
        //debugging on PUT request, no longer needed
        console.log("Received PUT request:", req.body, req.params);

        // destructuring checkbox values
        const { 
        "media.album.owned": owned, 
        "media.album.medium.cd": cd, 
        "media.album.medium.vinyl": vinyl, 
        "media.album.medium.cassette": cassette 
        } = req.body;

        // Find by id and update the req.body
        let updatedMedia = await Media.findByIdAndUpdate(
            req.params.id,
            { 
            "album.owned": owned === 'on', 
            "album.medium.cd": cd === 'on', 
            "album.medium.vinyl": vinyl === 'on', 
            "album.medium.cassette": cassette === 'on' 
            },
            { new: true }
        );
        
        //log what has been updated
        console.log("Updated media:", updatedMedia);
        res.redirect(`/owned/${req.params.id}`);
    } catch (error) {
        console.error("Error handling PUT request:", error);
        res.status(500).send("Internal Server Error");
    }
});

//Create - POST - Return back to OwnedMedia index with an additional OwnedMedia
router.post("/", async (req, res) => {
    try {
        //log form of req.body
        console.log("recieved form data", req.body)
        // kept having troubles, need to see what is be logged. 1st was, artist and name are required. adding details later
        if (!req.body.artist || !req.body.album || !req.body.album.name) {
            console.log("Validation failed. Artist and Name are required.");
            console.log("validation details:", {
                artist: req.body.artist,
                album: req.body.album,
                albumName: req.body.album ? req.body.album.name : undefined
            })
            //so I can see what I'm receiving back
            return res.status(400).send("Artist and Name are required");
        }
        if (!req.body.album.medium) {
            req.body.album.medium = {};
        }
        // Keeping my code safe. default values if not present. logic of what === means and how it should appear when submitted. THIS WAS SO DIFFICULT
        req.body.album.owned = req.body.album.owned === "on";
        req.body.album.medium.cd = req.body.album.medium.cd === "on" ? true : false;
        req.body.album.medium.vinyl = req.body.album.medium.vinyl === "on" ? true : false;
        req.body.album.medium.cassette = req.body.album.medium.cassette === "on" ? true : false;

        

        let addedMedia = await Media.create(req.body);
        //Kept having problems and logged to see what was addedMedia. unnecessary now
        console.log("Media created:", addedMedia);

        res.redirect("/owned");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

//Edit - GET - Bring to edit.ejs from show.ejs
router.get("/edit/:id", async (req, res) => {
    try {
        let foundMedia = await Media.findById(req.params.id)
        res.render("ownedmedia/edit.ejs", {media: foundMedia})
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

//Show - GET - Bring to show.ejs from the ownedMedia Index
router.get("/:id", async (req, res) => {
    //find media by id
    let foundMedia = await Media.findById(req.params.id)
    //log the request
    console.log(foundMedia)
    //bring to show page
    res.render("ownedmedia/show.ejs", {media: foundMedia})

})

//Export the router
module.exports = router