//Dependencies

const express = require("express")
const router = express.Router()
const Media = require("../models/Media")

// ----
//Routes

//Index - GET - Bring to index page of wantedMedia
router.get("/", async (req, res) => {
    const medias = await Media.find({})
    res.render("wantedmedia/index.ejs", {medias})
})

//New - GET - Brings to the form to make a NEW ownedMedia
router.get("/new", (req, res) => {
    //Bring to new form
    res.render("wantedmedia/new.ejs")
})

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

        res.redirect("/wanted");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

//Show - GET - Bring to show.ejs from the ownedMedia Index
router.get("/:id", async (req, res) => {
    //find media by id
    let foundMedia = await Media.findById(req.params.id)
    //log the request
    console.log(foundMedia)
    //bring to show page
    res.render("wantedmedia/show.ejs", {media: foundMedia})

})




//export the router
module.exports = router