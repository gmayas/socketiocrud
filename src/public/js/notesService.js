import notes from '../../models/notes.model';

export const getNotes = async () => {
    try {
        return await notes.find({}).sort("_id");
    } catch (e) {
        console.log(e);
    }
};

export const addNewNote = async (noteSend) => {
    try {
        let newNote = new notes({
            title: noteSend.title,
            note: noteSend.note,
        });
       return await newNote.save();          
    } catch (e) {
        console.log(e);
    }
};

export const modifyNote = async (noteUpdate) => {
    try {
       console.log('noteUpdate:', noteUpdate) 
       return await notes.updateOne({ _id: noteUpdate._id },
        {
            title: noteUpdate.title,
            note: noteUpdate.note,
            updated: Date.now()
        });          
    } catch (e) {
        console.log(e);
    }
};

export const deleteNote = async (id) => {
    try {
       console.log('id:', id) 
       return await notes.deleteMany({ _id: id });          
    } catch (e) {
        console.log(e);
    }
};