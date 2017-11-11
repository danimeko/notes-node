const fs = require("fs");
const os = require("os");
const _= require("lodash");
const yargs = require("yargs");

const notes = require("./note.js")
const titleOption = {
			description: "Title of note",
			demand: "true",
			alias: 't'
		};

let argv = yargs
	.command('add','Add a new note',{
		title: titleOption,
		body: {
			description: "Body of note",
			demand: "true",
			alias: 'b'
		}
	})
	.command('list' , 'List all notes')
	.command('read' , 'Read a note' ,{
		title : titleOption
	})
	.command('remove' ,'Remove a note',{
		title : titleOption
	})
	.help()
	.argv;
let command = argv._[0];

if(command == 'add'){
	let note = notes.addNote(argv.title , argv.body);
	if(note){
		console.log("note created");
		notes.logNote(note);
	}else{
		console.log("the title has taken");
	}
}else if(command == 'read'){
	let note = notes.readNote(argv.title);
	if(note){
		notes.logNote(note);
	}else{
		console.log("Note not found");
	}
}else if (command == 'list') {
	let allNotes = notes.getAll();
	allNotes.forEach((note)=>{
	notes.logNote(note);
	});
}else if (command == 'remove') {
	let removed = notes.removeNote(argv.title);
	let message = removed ? "Note Removed" : "Note not removed";
	console.log(message);
}else{
	console.log('command not recognised');
}
