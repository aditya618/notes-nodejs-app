const yargs = require('yargs');
const fs = require('fs');
const chalk = require('chalk');
// console.log(process.argv)
notes = [];

yargs.command({
    command: 'add',
    describe: 'Adds notes',
    builder: {
        title: {
            describe: 'Add a Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.green('----------------'));
        console.log(chalk.green('Added Note'));
        console.log(chalk.green('----------------'));
        console.log(chalk.green('Title: ' + argv.title));
        console.log(chalk.green('Body: ' + argv.body));
        const note = {title: argv.title, body: argv.body};
        const presentNotes = fs.readFileSync('./notes.json');
        notes = JSON.parse(presentNotes);
        notes.push(note);
        fs.writeFileSync('notes.json',JSON.stringify(notes));
        console.log(chalk.green('----------------'));
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Delete Note by Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const noteslist = JSON.parse(fs.readFileSync('./notes.json'));
        const foundNote = noteslist.find(note => {return note.title === argv.title})
        const notesafterdelete = noteslist.filter(notes => notes.title !== argv.title);
        if(foundNote) {
            console.log(chalk.green('----------------'));
            console.log(chalk.green('removed a note: ' + argv.title));
            console.log(chalk.green('----------------'));
            fs.writeFileSync('./notes.json', JSON.stringify(notesafterdelete));
        } else {
            console.log(chalk.red('----------------'));
            console.log(chalk.red('No record found!'));
            console.log(chalk.red('----------------'));
        }
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: () => {
        const noteslist = JSON.parse(fs.readFileSync('./notes.json'));
        if(noteslist && noteslist.length > 0){
            console.log(chalk.green('----------------'));
            console.log(chalk.green('listing all notes'));
            console.log(chalk.green('----------------'));
            noteslist.forEach(note => {
                console.log(chalk.red(note.title));
            });
            console.log(chalk.green('----------------'));
        } else {
            console.log(chalk.red('----------------'));
            console.log(chalk.red('No Records found'));
            console.log(chalk.red('----------------'));
            console.log(chalk.red('Add a note by "add" command'));
            console.log(chalk.red('----------------'));
        }
    }
});

yargs.command({
    command: 'read',
    describe: 'Reads the note',
    builder: {
        title: {
            describe: 'find by title name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const noteslist = JSON.parse(fs.readFileSync('./notes.json'));
        const foundnote = noteslist.find(note => {return note.title === argv.title});
        if(foundnote) {
            console.log('----------------');
            console.log('Found the note');
            console.log('----------------');
            const foundNote = noteslist.find(note => note.title === argv.title);
            console.log('Title: ' + foundNote.title);
            console.log('Body: ' + foundNote.body);
            console.log('----------------');
        } else {
            console.log('----------------');
            console.log('No record found');
            console.log('----------------');
        }
    }
});


yargs.parse();
// console.log(yargs.argv)

