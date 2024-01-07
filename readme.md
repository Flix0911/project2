# Seal Project 2

- **Name: Erick Valencia **
- **App Name: Record your Records **
- **Description: Similar to Discogs, this will be a place to store your music collection **
- **GitHub URL: https://github.com/Flix0911/project2 **
- **Deployed Website: https://ev-seal-project2.onrender.com/ **
- **Trello Board: https://trello.com/invite/b/TqJm5XOP/ATTIda72e9a32d509a18fe1429d671fe20b2935E0D42/project-2 **

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
| Index      | /music   | GET    | Bring to index |
| New        | /music/new | GET  | Bring to new page |
| Delete     | /music   | DELETE | Delete and return to Index |
| Update     | /music/:id | PUT  | Update music ID and return to show page |
| Create     | /music     | POST | Create the new music and return to index |
| Edit       | /music/:id | GET  | Bring user to edit page for specific id  |
| Show       | /music/:id | GET  | Bring user to certain ID and show all information | 

## Design Mockups (Desktop + Mobile)

##### Mobile Design

![Mobile Index Mockup](https://i.imgur.com/JbT2cmx.jpg)

![Mobile Show Mockup](https://i.imgur.com/YsHengP.jpg)

![Mobile New Mockup](https://i.imgur.com/vUtcFoz.jpg)

![Mobile Edit Mockup](https://i.imgur.com/4lAcM3t.jpg)

#### Desktop Design

![Desktop Index Mockup](https://i.imgur.com/qB4Gyvn.jpg)

![Desktop Show Mockup](https://i.imgur.com/mipk5F8.jpg)

![Desktop New Mockup](https://i.imgur.com/9MV8jjJ.jpg)

![Desktop Edit Mockup](https://i.imgur.com/A7imNyG.jpg)

## ERD (Entity Relationship Diagram)


![ERD](https://i.imgur.com/nwMJfxC.jpg)

Sample Schema:

- Note 1: Thinking on adding a 4th boolean of "seeking". Need to think through logic on that. If seeking, ideally I would have an Index page for albums that are owned in some format and albums that are beight sought after. This would be double pages and I would need a button to toggle between the two. Need to think through this a bit
- Note 2: Would like to add TrackList in this as well but need to also think through that piece as well. My problem would be how to display additional when adding in new.ejs. My assumption currently is to add a button in the edit next to TrackList to add an additional line for the list. Need to think through this as well
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
        owned: {
            cd: { type: Boolean, required: true },
            vinyl: { type: Boolean, required: true },
            cassette: { type: Boolean, required: true }
        },
    },
    countryOrigin: { type: String, required: true }
});




