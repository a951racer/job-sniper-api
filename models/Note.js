import mongoose from 'mongoose'
import { Contact } from './Contact'

const Schema = mongoose.Schema

const NoteSchema = new Schema({
  noteDate: {
    type: Date,
    required: 'Note date is required'
  },
  note: {
    type: String,
    required: 'Note is required'
  },
  links: [String],
  files: [String],
  opportunity: {
    type: Schema.ObjectId,
    ref: 'Opportunity'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
},
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'lastUpdated'
  }
})
  
export const Note = mongoose.model('Note', NoteSchema);
