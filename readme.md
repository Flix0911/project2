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

| 1/11 - Below tasks accomplished |
- ownedmedia index.ejs is showing only the image now
- New route is functional
- New.ejs file with the form is up
- Create route finally functional. This was a huge challenge and ended up being my problem for the day. I have nested data and nested nested data and that was causing me a lot of trouble for me. They're required booleans as well. Then I needed to set default values and handle the logic of that. However, IT WORKS! This should save me later on in the project

| 1/12 - Below tasks accomplished |
- wantedmedia show, index, new, and create routes are functional
- wantedmdia show.ejs, index.ejs, and new.ejs have been created
- Decided to add those additional pages because of how I want the browser URL to change
- Also created landing.ejs which has 2 options in it. One takes you to your owned media and the other to your wanted media
- Purposely had an easier day because of 1/11's struggles

| 1/13 - Below tasks accomplished |
- Edit and Update route for ownedMedia are now functional
- Edit.ejs for both ownedmedia and wanted media have been created
- Update route did cause trouble like expected. Working with nested data has been a tough hurdle but it makes a lot more sense than it did prior to this. I'm glad I chose the schema that I did
- Reinforce/practice destructuring for the the update route!
- Delete route was added, and it DESTROYED
- Full CRUD for ownedMedia was accomplished

| 1/14 - Below tasks accomplished |
- Edit, Update, and Delete routes for wantedMedia were completed. This was simple copy/paste. It's handlded separately purely for how you would walk through the application
- Layouts of all ejs pages are now more inline with what is going on, not the skeleton that they were previously
- Logic for index route to display only owned or wanted has been completed
- Added more seed data to help visualize
- Hamburger bar for index.ejs of both owned/wanted have desired links, no info yet

| 1/15 - Below tasks accomplished |
- Styling of Edit and Show ejs pages for both owned/wanted media was worked on. The general layout is there, especially on the edit page. Show page feels very bland
- On that note though, no color or color palette has been added to anything yet, minus checkboxes, which I doubt is permanent. Once the layout of all the pages are correct, that's when I'll come in and start adding colors to it all. I'm not really sure what it should be though, black, white, red, gold, silver, that seems to be my initial thoughts. Black and silver are common for vinyl and CDs, red seems to be a common color of tracklists on records, black is the norm for cassettes (though they do color them). Gold just seems appropriate for some reason. That is not today's task though
- Tried making a hamburger toggle and it went horribly. I think my index page will be changed to the below, noted updated index
![Desktop Index UPDATE](https://i.imgur.com/497u4st.jpg)

| 1/16 - Below tasks accomplished |
- More styling!
- Index of both owned and wanted media have been set up. I'm more or less happy with the layout of this, I think the albums came together nicely. My nitpicky complaints, the sides look ugly, especially with the navigation bar extending beyond. I'm not sure how I feel about that, but shortening the navigation bar would look wrong. I almost want color on the side to make the albums pop. However, you'll have clashing colors
- Colors on the page are not my ideal. That is something that needs to be worked on, and will be in the touch up phase. I think the grayish/brown as the body background is nice. The navigation buttons are not though. Same goes with font, but again, touch ups, not the big picture stuff
- Some odds in ends of links not working or sending you to incorrect pages were taken care of
- Tomorrow will be finishing up new.ejs page. From there, I can work on color scheme of the whole application. That'll be a journey in and of its self
| 1/17 Below tasks accomplished |
- More Styling!
- All pages are now styled and layout-wise, look pretty good. They look a little flat at time but I'm more or less happy with the styling. There are a couple of things that should be noted at this point. 1. I've tried to stay consistent throughout all the pages now. I previously did not have that and there were stylistic changes, that is now no more, for the most part everything looks similar. 2. I've reduced my voice in the pages - meaning: Like these notes, I tend to write more than what is needed. That was cut down and I think I can cut down more. This includes the welcome page, instructions on edit page, and what the links say in their text box. 3. With that, it makes everything look a lot more simple, which it already was, but even more simplification 
- I have created a new problem for myself and that is my nav.ejs is now a waste of space, it is on no page. This also includes my footer.ejs, it is now completely gone from my pages. I changed layouts throughout this and they didn't feel right. I need to create a few different navigation bars at this point, but is that redundent/DRY. 
- My buttons for "delete" and "update your collection" look horrible. They have a hover effect. Regarding the Edit page, I'm somewhat unhappy with it. It is extremely dull