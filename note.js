const fs = require('fs');


let saveNote = (notes) => {
	fs.writeFileSync('note-data.json' , JSON.stringify(notes));
};

let feachNote = () => {
	try{
		let noteObj = fs.readFileSync('note-data.json');
		return JSON.parse(noteObj);
	}catch(e){
		return [];
	}
};

let addNote = (title , body) => {
	let notes = feachNote();
	let note = {
		title ,
		body 
	};

	let duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNote(notes);
		return note;
	}
		
};

let getAll = () => {
	return feachNote();
};

let readNote = (title) => {
	let notes = feachNote();
	let note = notes.filter((note) => note.title === title);
	return note[0];
};

let removeNote = (title) => {
	let notes = feachNote();

	let newNote = notes.filter((note) => {
		return note.title != title;
	});

	saveNote(newNote);

	return notes.length != newNote.length ;
};

let logNote = (note) => {
	console.log("--");
	console.log("Title : ", note.title);
	console.log("Body : ", note.body);
};


module.exports ={
	addNote,
	getAll,
	readNote,
	removeNote,
	logNote
}