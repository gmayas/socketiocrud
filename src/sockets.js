
import { getNotes, addNewNote, modifyNote, deleteNote } from './public/js/notesService'


export default (io) => {
  io.on("connection", async (socket) => {
    // console.log(socket.handshake.url);
    console.log("Se conecto socket, id::", socket.id);
    const notesList  = await getNotes();
    socket.emit('server:loadNotes', notesList);
    //console.log('notesList: ', notesList);
    // Escucha desde cliente client:sends_message
    socket.on('client:sendNewNote',  async (noteSend) => {
      const newNote = await addNewNote(noteSend);
      //console.log('newNote: ', newNote);
      socket.emit('server:newNote', newNote);
    });

    socket.on('client:deleteNote',  async (id) => {
      const delNote = await deleteNote(id);
      console.log('delNote: ', delNote);
      const notesList  = await getNotes();
      socket.emit('server:loadNotes', notesList);
    });
    
    
    //
    socket.on("disconnect", () => {
      console.log("Se desconecto socket, id:", socket.id);
    });
  });
};