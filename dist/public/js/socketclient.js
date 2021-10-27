"use strict";

var socket = io(); //Envia una nueva nota

var saveNote = function saveNote(noteSed) {
  socket.emit('client:sendNewNote', noteSed);
}; //Lee la lista notas creadas


socket.on('server:loadNotes', function (noteList) {
  renderNotes(noteList);
});
socket.on('server:getNote', function (getNote) {
  var title = document.querySelector('#title');
  var note = document.querySelector('#note');
  title.value = getNote.title;
  note.value = getNote.note;
  noteId = getNote._id;
}); //Resive la neuva nota creada

socket.on('server:newNote', function (newNote) {
  console.log('newNote: ', newNote);
  addNote(newNote);
});

var getNote = function getNote(id) {
  socket.emit('client:getNote', id);
};

var modifyNote = function modifyNote(note) {
  socket.emit('client:modifyNote', note);
};

var deleteNote = function deleteNote(id) {
  socket.emit('client:deleteNote', id);
};