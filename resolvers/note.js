import { Note } from '../models/Note'

export const noteResolvers = {
    notes: (args, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      return Note.find().populate('user').populate('contacts')
    },

    createNote: async ({ note }, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      note.user = req.userId
      let newNote = new Note(note)
      await newNote.save()
      newNote = await Note.findById(newNote.id).populate('user')
      return newNote
    },

    updateNote: async ({id, note}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const updatedNote = await Note.findByIdAndUpdate(id, note, {new: true})
      return updatedNote
    },

    deleteNote: async ({id}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const deletedNote = await Note.findByIdAndRemove(id)
      return deletedNote
    }
}