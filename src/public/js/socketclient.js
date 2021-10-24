const socket = io();

//Envia una nueva nota
const saveNote = (noteSed) => {
    socket.emit('client:sendNewNote', noteSed)
}

 //Le la lita notas creadas
 socket.on('server:loadNotes', (noteList) => {
    console.log('noteList: ', noteList);
    renderNotes(noteList)
})

 //Resive la neuva nota creada
 socket.on('server:newNote', (newNote) => {
    console.log('newNote: ', newNote);
    addNote(newNote);
})

const modifyNote = (note) => {
    console.log('modifyNote:', note)
}

const deleteNote = (id) => {
    //console.log('btnDelete:', id)
    socket.emit('client:deleteNote', id)

}

