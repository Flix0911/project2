//Import dependencies
const mongoose = require("mongoose")

//Create Schema

const musicSchema = new mongoose.Schema({
    artist: { type: String, required: true },
    album: {
        name: { type: String, required: true },
        img: { type: String, required: true },
        releaseDate: { type: Date, required: true },
        recordLabel: { type: String, required: true },
        genre: { type: String, required: true },
        duration: { type: Number, required: true},
        rating: { type: Number, required: true},
        language: { type: String, required: true },
        owned: { type: Boolean, required: true },
        medium: {
            cd: { type: Boolean, required: true },
            vinyl: { type: Boolean, required: true },
            cassette: { type: Boolean, required: true }
        },
    },
    countryOrigin: { type: String, required: true }
});

//create vaariable to export
const Media = mongoose.model("Media", musicSchema)

//export out
module.exports = Media