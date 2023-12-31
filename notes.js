// app features js
const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note =>{
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
return JSON.parse(localStorage.getItem("stickynotes-notes") || "[0]");
}

function saveNotes(notes){
localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id,content){
const element = document.createElement("textarea");

element.classList.add("note");
element.value = content;
element.placeholder = "Double-click to delete notepad";


element.addEventListener("change", () => {
updateNote(id, element.value);
});

element.addEventListener("dblclick" , () =>{
const doDelete = confirm("Are you sure you wish to delete this sticky note?");

if (doDelete) {
    deleteNote(id, element)
}
});
return element;
}


function addNote(){
 const existingNotes = getNotes();
 const noteObject = {
    id: Math.floor(Math.random () * 100000),
    content: ""
};

const noteElement = createNoteElement(noteObject.id, noteObject.content);
notesContainer.insertBefore(noteElement, addNoteButton);

notes.push(noteObject);
saveNotes(notes);
}

const notes = getNotes();
function updateNote(id, newContent){
const targetNote = notes.filter(note => note.id == id)[0];

targetNote.content = newContent;
saveNotes(notes);
}

function deleteNote(id, element){
   const notes = getNotes().filter(note => note.id != id);

   saveNotes(notes);
   notesContainer.removeChild(element);
};

 

// end of app js

// icon js


let iconStyle = document.querySelector(".bi-trash").addEventListener("dblclick", () => {
    const doDelete = confirm("Are you sure you want to remove this content?");
    
})