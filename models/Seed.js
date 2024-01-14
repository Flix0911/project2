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
              {
                artist: "Blue Oyster Cult",
                album: {
                  name: "Blue Oyster Cult",
                  img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Blue_Oyster_Cult.png",
                  releaseDate: ("1972-01-19"),
                  recordLabel: "The Warehouse",
                  genre: "Psychedelic Rock",
                  duration: 36,
                  rating: 4,
                  language: "English",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Blue Oyster Cult",
                album: {
                  name: "Tyranny and Mutation",
                  img: "https://upload.wikimedia.org/wikipedia/en/6/68/Blue_Oyster_Cult-Tyranny_and_Mutation.jpg",
                  releaseDate: ("1973-02-19"),
                  recordLabel: "Columbia Studios",
                  genre: "Psychedelic Rock",
                  duration: 38,
                  rating: 4,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: true,
                    vinyl: false,
                    cassette: true,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Blue Oyster Cult",
                album: {
                  name: "Secret Treaties",
                  img: "https://upload.wikimedia.org/wikipedia/en/8/89/BlueOysterCultSecretTreaties.jpg",
                  releaseDate: ("1974-04-05"),
                  recordLabel: "Columbia 30th Street Studio",
                  genre: "Hard Rock",
                  duration: 38,
                  rating: 3,
                  language: "English",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Talking Heads",
                album: {
                  name: "More Songs about Buildings and Food",
                  img: "https://upload.wikimedia.org/wikipedia/en/7/75/TalkingHeadsMoreSongsAboutBuildingsandFood.jpg",
                  releaseDate: ("1978-07-14"),
                  recordLabel: "Compass Point",
                  genre: "New Wave",
                  duration: 41,
                  rating: 3,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: true,
                    vinyl: true,
                    cassette: true,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Talking Heads",
                album: {
                  name: "Remain in Light",
                  img: "https://upload.wikimedia.org/wikipedia/en/2/2d/TalkingHeadsRemaininLight.jpg",
                  releaseDate: ("1980-10-08"),
                  recordLabel: "Compass Point",
                  genre: "New Wave",
                  duration: 40,
                  rating: 3,
                  language: "English",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Talking Heads",
                album: {
                  name: "Speaking in Tongues",
                  img: "https://upload.wikimedia.org/wikipedia/en/3/3e/Talking_Heads_-_Speaking_in_Tongues.jpg",
                  releaseDate: ("1983-06-01"),
                  recordLabel: "Blank Tape",
                  genre: "Art-Rock",
                  duration: 40,
                  rating: 5,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: true,
                    vinyl: false,
                    cassette: true,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Black Sabbath",
                album: {
                  name: "Black Sabbath",
                  img: "https://upload.wikimedia.org/wikipedia/en/d/da/Black_Sabbath_debut_album.jpg",
                  releaseDate: ("1970-02-13"),
                  recordLabel: "Regent Sound",
                  genre: "Heavy Metal",
                  duration: 38,
                  rating: 5,
                  language: "English",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United Kingdom",
              },
              {
                artist: "Black Sabbath",
                album: {
                  name: "Paranoid",
                  img: "https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg",
                  releaseDate: ("1970-09-18"),
                  recordLabel: "Regent Sound",
                  genre: "Heavy Metal",
                  duration: 41,
                  rating: 5,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: false,
                    vinyl: true,
                    cassette: false,
                  },
                },
                countryOrigin: "United Kingdom",
              },
              {
                artist: "Black Sabbath",
                album: {
                  name: "Technical Ecstasy",
                  img: "https://upload.wikimedia.org/wikipedia/en/d/d5/Black-Sabbath-Technical-Ecstasy.jpg",
                  releaseDate: ("1976-09-25"),
                  recordLabel: "Criteria",
                  genre: "Heavy Metal",
                  duration: 40,
                  rating: 3,
                  language: "English",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United Kingdom",
              },
              {
                artist: "Kim Wan-sun",
                album: {
                  name: "Alone in Front of the Yard",
                  img: "https://e.snmc.io/i/1200/s/c595ad2b6529b68c69b81182593e78d1/3344011",
                  releaseDate: ("1987-05-07"),
                  recordLabel: "Unknown",
                  genre: "Pop",
                  duration: 41,
                  rating: 3,
                  language: "Korean",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "South Korea",
              },
              {
                artist: "Thundercat",
                album: {
                  name: "The Golden Age of Apocalypse",
                  img: "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Golden_Age_of_Apocalypse_-_Thundercat_%28cover%29.png",
                  releaseDate: ("2011-08-29"),
                  recordLabel: "Brainfeeder",
                  genre: "Jazz Fusion",
                  duration: 37,
                  rating: 4,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: true,
                    vinyl: true,
                    cassette: true,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Thundercat",
                album: {
                  name: "Drunk",
                  img: "https://upload.wikimedia.org/wikipedia/en/9/99/DrunkThundercat.jpg",
                  releaseDate: ("2017-02-24"),
                  recordLabel: "Brainfeeder",
                  genre: "Funk",
                  duration: 51,
                  rating: 3,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: true,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Chacalon y La Nueva Crema",
                album: {
                  name: "Chacalon y La Nueva Crema",
                  img: "https://i.discogs.com/xoVk4JSJMnrGjb60_ra8CugDQ6aTafyjhBXsT1fi9AA/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4NzE1/MjAtMTUyMDU0Mjg4/MS04ODQzLmpwZWc.jpeg",
                  releaseDate: ("1981-03-18"),
                  recordLabel: "Unknown",
                  genre: "Cumbia",
                  duration: 43,
                  rating: 5,
                  language: "Spanish",
                  owned: true,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: true,
                  },
                },
                countryOrigin: "Peru",
              },
              {
                artist: "Yumi Murata",
                album: {
                  name: "Drywindasian",
                  img: "https://i.discogs.com/56FVIEo6iQt8BnmMXB8VpzpO-se8i4CM_wFV8B3YMlI/rs:fit/g:sm/q:90/h:240/w:239/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMzE5/OTItMTMyOTY1ODIz/OC5qcGVn.jpeg",
                  releaseDate: ("1983-03-18"),
                  recordLabel: "Vap",
                  genre: "Fusion, Funk",
                  duration: 35,
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
                artist: "King Gizzard and the Lizard Wizard",
                album: {
                  name: "Paper Mache Dream Balloon",
                  img: "https://i.discogs.com/U-iDLusvOjIywCEgkC3yFWJX6I3ETvLGJ2lFuMsd31M/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNzkw/NDU3LTE2MzY5NjIx/MTktMjQxMy5qcGVn.jpeg",
                  releaseDate: ("2015-03-18"),
                  recordLabel: "Unknown",
                  genre: "Psychedelic Rock",
                  duration: 45,
                  rating: 5,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: false,
                    vinyl: true,
                    cassette: false,
                  },
                },
                countryOrigin: "Australia",
              },
              {
                artist: "Glen Campbell",
                album: {
                  name: "Rhinestone Cowboy",
                  img: "https://i.discogs.com/Guva_0AUQxdv1DrTg7um0oJV0RC3Q6dSTc8EtNBI3QA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDgy/OTUtMTQ3MzA5NTkz/Mi05NjkwLmpwZWc.jpeg",
                  releaseDate: ("1975-08-18"),
                  recordLabel: "Haven Records",
                  genre: "Country",
                  duration: 38,
                  rating: 4,
                  language: "English",
                  owned: true,
                  medium: {
                    cd: true,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "R. Stevie Moore",
                album: {
                  name: "Has Beens and Never Weres",
                  img: "https://i.discogs.com/vC_zC4AiYhf2MbnxZjFxe1-LFxMdd44aJ4ciUkD_Mu4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDU1/MjktMTY5NjUxNTEx/OS04ODIyLnBuZw.jpeg",
                  releaseDate: ("1990-03-04"),
                  recordLabel: "Self-Producted",
                  genre: "Bedroom-Pop",
                  duration: 35,
                  rating: 3,
                  language: "English",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "United States",
              },
              {
                artist: "Jorge Ben",
                album: {
                  name: "Africa Brasil",
                  img: "https://i.discogs.com/1crxEE6Nq0kl2KW40M2vVZZ3qdrNMK044nFhBvn-Ias/rs:fit/g:sm/q:90/h:400/w:397/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MjMw/MDktMTI5ODEzMjI4/MS5qcGVn.jpeg",
                  releaseDate: ("1977-08-18"),
                  recordLabel: "Philips",
                  genre: "Fusion, Funk",
                  duration: 46,
                  rating: 5,
                  language: "Portuguese",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "Brasil",
              },
              {
                artist: "Piper",
                album: {
                  name: "I'm Not In Love",
                  img: "https://i.discogs.com/mn9qx1aGOOTsVM7kwTIUNeyOXTd7pcrQnj8t-B0J0WA/rs:fit/g:sm/q:90/h:550/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODQx/NjY3LTE2MTU3NDA3/MDItMjEyNS5qcGVn.jpeg",
                  releaseDate: ("1983-03-18"),
                  recordLabel: "Ship To Shore Phonograph Co",
                  genre: "City Pop",
                  duration: 35,
                  rating: 5,
                  language: "Japanese",
                  owned: false,
                  medium: {
                    cd: false,
                    vinyl: false,
                    cassette: false,
                  },
                },
                countryOrigin: "Japan",
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