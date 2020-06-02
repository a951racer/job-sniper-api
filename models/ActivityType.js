import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ActivityTypeSchema = new Schema({
  activityType: {
    type: String,
    trim: true,
    default: '',
    required: 'Activity Type cannot be null'
  },
},
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'lastUpdated'
  }
})

export const ActivityType = mongoose.model('ActivityType', ActivityTypeSchema);

