import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const OpportunitySchema = new Schema({
  employerName: {
    type: String,
    default: '',
    trim: true,
    required: 'Employer name cannot be blank'
  },
  source: {
    type: String,
    default: '',
    trim: true,
    required: 'Source cannot be blank'
  },
  sourceContact: {
    type: Schema.ObjectId,
    ref: 'Contact'
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
