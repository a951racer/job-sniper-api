import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const OpportunitySchema = new Schema({
  employerName: {
    type: String,
    trim: true,
    required: true
  },
  jobTitle: {
    type: String,
    trim: true,
    require: true
  },
  source: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  sourceContact: {
    type: Schema.ObjectId,
    ref: 'Contact',
    default: null
  },
  initialContactDate: {
    type: Date,
    default:  Date.now
  },
  employerURL: {
    type: String,
    default: '',
    trim: true
  },
  tags: [String],
  links: [String],
  files: [String],
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
  
  
export const Opportunity = mongoose.model('Opportunity', OpportunitySchema);
