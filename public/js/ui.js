"use strict";

var notesList = document.querySelector('#notes');
var noteId = '';

var noteUI = function noteUI(addNote) {
  var div = document.createElement('div');
  div.innerHTML = "\n    <div class=\"card card-body border-light mb-2\"> \n       <div class=\"d-flex justify-content-between\"> \n            <h class=\"h3 card-title\">".concat(addNote.title, "</h>\n            <small class=\"card-title\">id: ").concat(addNote._id, "</small>\n       </div>\n       <div class=\"d-flex justify-content-between\"> \n            <p>").concat(addNote.note, "</p>\n       <div>\n            <button id=\"updateButton\" class=\"btn btn-warning mt-1 me-1\" data-id=\"").concat(addNote._id, "\">Modify</button>\n            <button id=\"deleteButton\" class=\"btn btn-danger mt-1 me-1\" data-id=\"").concat(addNote._id, "\">Delete</button>\n       </div>\n    </div>");
  var btnUpdate = div.querySelector('#updateButton');
  btnUpdate.addEventListener("click", function (e) {
    e.preventDefault();
    getNote(btnUpdate.dataset.id);
  });
  var btnDelete = div.querySelector('#deleteButton');
  btnDelete.addEventListener("click", function (e) {
    e.preventDefault();
    deleteNote(btnDelete.dataset.id);
  }); //

  return div;
};

var addNote = function addNote(note) {
  notesList.append(noteUI(note));
};

var renderNotes = function renderNotes(notes) {
  notesList.innerHTML = '';
  notes.map(function (note) {
    notesList.append(noteUI(note));
  });
};