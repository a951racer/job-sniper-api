import { ActivityType } from '../models/ActivityType'

export const activityTypeResolvers = {
    activityTypes: (args, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      return ActivityType.find()
    },
    createActivityType: async ({ activityType }, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const newActivityType = new ActivityType(activityType);
      await newActivityType.save()
      return newActivityType
    },
    updateActivityType: async ({id, activityType}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const updatedActivityType = await ActivityType.findByIdAndUpdate(id, activityType, {new: true})
      return updatedActivityType
    },

    deleteActivityType: async ({id}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const deletedActivityType = await ActivityType.findByIdAndRemove(id)
      return deletedActivityType
    }
}
