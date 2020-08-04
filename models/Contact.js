import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  phone: String,
  email: String,
  organization: String,
  comments: String,
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

export const Contact = mongoose.model('Contact', ContactSchema);
