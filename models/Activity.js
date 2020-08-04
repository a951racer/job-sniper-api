import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  activityType: {
    type: Schema.ObjectId,
    ref: 'ActivityType'
  },
  activityDate: Date,
  comments: String,
  opportunity: {
    type: Schema.ObjectId,
    ref: 'Opportunity'
  },
  contacts: [
    {
      type: Schema.ObjectId,
      ref: 'Contact'
    }
  ],
  links: [String],
  files: [String],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
},
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'lastUpdated'
  }
})

export const Activity = mongoose.model('Activity', ActivitySchema);
