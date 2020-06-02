import { Opportunity } from '../models/Opportunity'

export const opportunityResolvers = {
    opportunities: (args, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      return Opportunity.find().populate('user')
    },

    createOpportunity: async ({ opportunity }, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      opportunity.user = req.userId
      let newOpportunity = new Opportunity(opportunity)
      await newOpportunity.save()
      newOpportunity = await Opportunity.findById(newOpportunity.id).populate('user')
      return newOpportunity
    },

    updateOpportunity: async ({id, opportunity}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const updatedOpportunity = await Opportunity.findByIdAndUpdate(id, opportunity, {new: true})
      return updatedOpportunity
    },

    deleteOpportunity: async ({id}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const deletedOpportunity = await Opportunity.findByIdAndRemove(id)
      return deletedOpportunity
    }
}