"use strict";

//Conección a eventos io
// Año actual
document.getElementById('year').innerText = new Date().getFullYear(); // Funcion main
//Se obtienen loa tributos de form

var noteForm = document.querySelector('#noteForm'); //Se obtienen loa tributos de tltle

var title = document.querySelector('#title'); //Se obtienen loa tributos de note

var note = document.querySelector('#note'); //Evento send

noteForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (Object.keys(noteId).length === 0) //Envia una nueva nota
    saveNote({
      title: title.value,
      note: note.value
    });else {
    modifyNote({
      id: noteId,
      title: title.value,
      note: note.value
    });
  }
  noteId = '';
  title.value = '';
  note.value = '';
  title.focus();
});