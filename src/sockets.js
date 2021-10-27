
import { getNotes, getNote, addNewNote, modifyNote, deleteNote } from './public/js/notesService'

export default (io) => {
  io.on("connection", async (socket) => {
    // console.log(socket.handshake.url);
    console.log("Se conecto socket, id::", socket.id);
    const notesList  = await getNotes();
    socket.emit('server:loadNotes', notesList);
    // Escucha desde cliente client:sends_message
    socket.on('client:sendNewNote',  async (noteSend) => {
      const newNote = await addNewNote(noteSend);
      io.emit('server:newNote', newNote);
    });
    //
    socket.on('client:getNote',  async (id) => {
      const getMote = await getNote(id);
      socket.emit('server:getNote', getMote);
    });
    //
    socket.on('client:deleteNote',  async (id) => {
      const delNote = await deleteNote(id);
      const notesList  = await getNotes();
      io.emit('server:loadNotes', notesList);
    });
    //
    socket.on('client:modifyNote',  async (note) => {
      const upNote = await modifyNote(note);
      const notesList  = await getNotes();
      io.emit('server:loadNotes', notesList);
    });
    //
    socket.on("disconnect", () => {
      console.log("Se desconecto socket, id:", socket.id);
    });
  });
};