const notesList = document.querySelector('#notes');

const noteUI = (addNote) => {

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="card card-body border-light mb-2"> 
       <div class="d-flex justify-content-between"> 
            <h class="h3 card-title">${addNote.title}</h>
            <small class="card-title">id: ${addNote._id}</small>
       </div>
       <div class="d-flex justify-content-between"> 
            <p>${addNote.note}</p>
       <div>
            <button id="updateButton" class="btn btn-warning mt-1 me-1" data-id="${addNote._id}">Modify</button>
            <button id="deleteButton" class="btn btn-danger mt-1 me-1" data-id="${addNote._id}">Delete</button>
       </div>
    </div>`;

  const btnUpdate = div.querySelector('#updateButton');
  //console.log('btnUpdate:', btnUpdate)
  btnUpdate.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log('btnUpdate:', btnUpdate.dataset.id)
    modifyNote(addNote);
  });

  const btnDelete = div.querySelector('#deleteButton');
  //console.log('btnDelete:', btnDelete)
  btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteNote(btnDelete.dataset.id)
  });
  //
  return div;
};

const addNote = (note) => {
  notesList.append(noteUI(note))
};

const renderNotes = (notes) => {
  notesList.innerHTML = '';
  notes.map((note) => {
    notesList.append(noteUI(note))
  })
};