//Conección a eventos io
// Año actual
document.getElementById('year').innerText =  new Date().getFullYear();
// Funcion main

//Se obtienen loa tributos de form
const noteForm = document.querySelector('#noteForm');
//Se obtienen loa tributos de tltle
const title = document.querySelector('#title');
//Se obtienen loa tributos de note
const note = document.querySelector('#note');
//Evento send
noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //Envia una nueva nota
    saveNote({title: title.value, note: note.value});
});