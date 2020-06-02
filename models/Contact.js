import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    trim: true,
    required: 'First name cannot be blank'
  },
  lastName: {
    type: String,
    default: '',
    trim: true,
    required: 'First name cannot be blank'
  },
  phoneNumbers: [
    {
      label: String,
      phone: String
    }
  ],
  emailAddresses: [
    {
      label: String,
      email: String
    }
  ],
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
