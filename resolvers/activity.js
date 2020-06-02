import { Activity } from '../models/Activity'

export const activityResolvers = {
    activities: (args, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      return Activity.find().populate('user').populate('activityType')
    },
    createActivity: async ({ activity }, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      activity.user = context.userId
      let newActivity = new Activity(activity)
      await newActivity.save()
      newActivity = await Activity.findById(newActivity.id).populate('user').populate('activityType')
      return newActivity
    },

    updateActivity: async ({id, activity}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const updatedActivity = await Activity.findByIdAndUpdate(id, activity, {new: true})
      return updatedActivity
    },

    deleteActivity: async ({id}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const deletedActivity = await Activity.findByIdAndRemove(id)
      return deletedActivity
    }
}