import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  email: {
    type: String,
    default: '',
    trim: true,
    required: 'Email cannot be blank'
  },
  password: {
    type: String,
    default: '',
    trim: true,
    required: 'Password cannot be blank'
  },
  tags: [String],
  resumes: [String],
  coverLetters: [String],
  isAdmin: {
    type: Boolean,
    default: false
  },
  isValidated: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'lastUpdated'
  }
})

export const User = mongoose.model('User', UserSchema);
