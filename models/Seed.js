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
                  img: "https://i.reddhttps://i.discogs.com/8Pgpm3v79zxHeaiesuC71943IaVMOH_UQFDPQNFrQ6M/rs:fit/g:sm/q:90/h:479/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1MDU0/MjUtMTI4NzY5MjI2/MC5qcGVn.jpeg.it/ry3lgsr9mcv31.jpg",
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