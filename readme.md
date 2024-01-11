# Seal Project 2

- **Name: Erick Valencia**
- **App Name: Record your Music collection**
- **Description: Similar to Discogs, this will be a place to store your music collection**
- **GitHub URL: https://github.com/Flix0911/project2**
- **Deployed Website: https://ev-seal-project2.onrender.com/**
- **Trello Board: https://trello.com/invite/b/TqJm5XOP/ATTIda72e9a32d509a18fe1429d671fe20b2935E0D42/project-2**

## List of Dependencies

#### Node Dependencies (package.json)

- bcrypt (TBD)
- connect-mongo
- dotenv
- ejs
- express
- express-session (TBD)
- method-override
- mongoose
- morgan


#### Frontend (if used, ex. jQuery, AlpineJS, Bootstrap, HTMX, etc.)

- N/A currently

## Route Map

(Below should be a table listing the different routes in your app an their purposes)

| Route Name | Endpoint | Method | Description |
|------------|----------|--------|-------------|
| Ex         | /url     | Method | what it does |
| Index      | /collection | GET | Bring to landing page |
| Index-owned      | /collection/owned   | GET    | Bring to owned index |
| Index-wanted      | /collection/wanted   | GET    | Bring to owned index |
| New        | /collection/new | GET  | Bring to new page |
| Delete - owned    | /collection/owned  | DELETE | Delete and return to Index of owned |
| Delete - wanted    | /collection/wanted  | DELETE | Delete and return to Index of wanted |
| Update - owned/wanted   | /collection/:id | PUT  | Update music ID and return to show page |
| Create     | /collection     | POST | Create the new music and return to index |
| Edit       | /collection/:id | GET  | Bring user to edit page for specific id  |
| Show       | /collection/:id | GET  | Bring user to certain ID and show all information | 

## Design Mockups (Desktop + Mobile)

##### Mobile Design

![Mobile Landing Page Mockup](https://i.imgur.com/oe6kNzi.jpg)

![Mobile Index Owned Mockup](https://i.imgur.com/wZRPFYJ.jpg)

![Mobile Index Wanted Mockup](https://i.imgur.com/zNYZFt7.jpg)

![Mobile Show Mockup](https://i.imgur.com/SgJDLeB.jpg)

![Mobile New Mockup](https://i.imgur.com/0B5f40B.jpg)

![Mobile Edit Mockup](https://i.imgur.com/a9aj7dT.jpg)

#### Desktop Design

![Landing Page Mockup](https://i.imgur.com/ZKKgrk9.jpg)

![Desktop Index of Owned Mockup](https://i.imgur.com/88NHM7s.jpg)

![Desktop Index of Wanted Mockup](https://i.imgur.com/jUPOJAg.jpg)

![Desktop Show Mockup](https://i.imgur.com/VJWxG5A.jpg)

![Desktop New Mockup](https://i.imgur.com/XT0nANM.jpg)

![Desktop Edit Mockup](https://i.imgur.com/zVCUC7R.jpg)

## ERD (Entity Relationship Diagram)


![ERD](https://i.imgur.com/1XHjZ2A.jpg)

Sample Schema:

- Note 1: Would like to add TrackList in this as well but need to also think through that piece as well. My problem would be how to display additional when adding in new.ejs. My assumption currently is to add a button in the edit next to TrackList to add an additional line for the list. Need to think through this as well
```JavaScript
const musicSchema = new Schema({
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
        owned: { type: Boolean, required: true }
        medium: {
            cd: { type: Boolean, required: true },
            vinyl: { type: Boolean, required: true },
            cassette: { type: Boolean, required: true }
        },
    },
    countryOrigin: { type: String, required: true }
});

```

#### Future improvements:
- Authentication
- Tracklist and tracklist button on new.ejs to click to add additional slots

##### Daily tracker

| 1/10 - Below tasks accomplished | 
- Received approval
- File structure built
- Index route for both Owned and Wanted functional just to check connection
- CSS connected
- All other files connected
- Created seed file and connection.js to seed data
= Updated ownedmedia to display said data (not handling logic of owned/wanted yet, just to prove it works)


