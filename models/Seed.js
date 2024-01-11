//Dependencies
const Media = require("./Media")
const mongoose = require("./connection")

//Seed code
mongoose.connection.on("open", async () => {
    try {
        const mediaSeed = [
            {
              artist: "Tatsuro Yamashita",
              album: {
                name: "Ride on Time",
                img: "https://i.redd.it/ry3lgsr9mcv31.jpg",
                releaseDate: new Date("1980-09-19"),
                recordLabel: "CBS/Sony",
                genre: "City Pop",
                duration: 43,
                rating: 5,
                language: "Japanese",
                owned: true,
                medium: {
                  cd: false,
                  vinyl: true,
                  cassette: false,
                },
              },
              countryOrigin: "Japan",
            },
            {
                artist: "Hall & Oates",
                album: {
                  name: "Voices",
                  img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ig0mgLCtL._UF1000,1000_QL80_.jpg",
                  releaseDate: new Date("1980-07-29"),
                  recordLabel: "RCA Records",
                  genre: "Pop",
                  duration: 43,
                  rating: 3,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: false,
                    vinyl: true,
                    cassette: false,
                  },
                },
                countryOrigin: "United States",
              },
          ];

          //Delete all data
          await Media.deleteMany({})

          //Seed starter albums
          const data = await Media.create(mediaSeed)

          //log creation
          console.log("----2 albums added----")
          console.log(data)
          console.log("----2 albums added----")

          //close connection
          mongoose.connection.close()
    } catch (error) {
        console.log("-----", error.message, "-----")
    }
})