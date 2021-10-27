const socket = io();

//Envia una nueva nota
const saveNote = (noteSed) => {
    socket.emit('client:sendNewNote', noteSed)
};

 //Lee la lista notas creadas
socket.on('server:loadNotes', (noteList) => {
    renderNotes(noteList)
});

socket.on('server:getNote', (getNote) => {
    let title = document.querySelector('#title');
    let note = document.querySelector('#note');
    title.value = getNote.title;
    note.value = getNote.note;
    noteId = getNote._id;
});

 //Resive la neuva nota creada
 socket.on('server:newNote', (newNote) => {
    console.log('newNote: ', newNote);
    addNote(newNote);
});

const getNote = (id) => {
    socket.emit('client:getNote', id)
};

const modifyNote = (note) => {
    socket.emit('client:modifyNote', note)
};

const deleteNote = (id) => {
    socket.emit('client:deleteNote', id)
};