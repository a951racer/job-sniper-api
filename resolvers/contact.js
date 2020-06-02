import { Contact } from '../models/Contact'

export const contactResolvers = {
    contacts: (args, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      return Contact.find().populate('user')
    },
    createContact: async ({ contact }, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      contact.user = req.userId
      let newContact = new Contact(contact)
      await newContact.save()
      newContact = await Contact.findById(newContact.id).populate('user')
      return newContact
    },

    updateContact: async ({id, contact}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const updatedContact = await Contact.findByIdAndUpdate(id, contact, {new: true})
      return updatedContact
    },

    deleteContact: async ({id}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const deletedContact = await Contact.findByIdAndRemove(id)
      return deletedContact
    }
}