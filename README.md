# notes-nodejs-app
Notes app created to create, delete, read and list notes from file system (notes.json).

Title and Body of notes are given from command prompt and stored in notes.json file. Notes are deleted and read by Title name.
 
# Things used in project:
 -- nodejs
 -- yargs library (for parsing arguments in command prompt)
 -- fs library (to read and write file in local)
 -- chalk library (to add colors and styling in command prompt)
 
# How to use this app?
 -- do "npm i" to install dependencies
 -- "node app.js add --title="title" --body="body" ------ To add notes to notes.json file
 -- "node app.js remove --title="title" ----------------- To remove notes by title
 -- "node app.js read --title="title" ------------------- To read note by title
 -- "node app.js list ----------------------------------- To list all notes from notes.json file
 
 
 GOOD TO GO!!!!!!!!!!!!!!!!
