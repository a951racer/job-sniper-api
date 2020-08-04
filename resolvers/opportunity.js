import { Opportunity } from '../models/Opportunity'

export const opportunityResolvers = {
    opportunities: (args, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      return Opportunity.find().populate('user').populate('sourceContact')
    },

    createOpportunity: async ({ opportunity }, req) => {
      try {
        if (!req.isAuth) throw new Error('you must be logged in')
        opportunity.user = req.userId
        let newOpportunity = new Opportunity(opportunity)
        await newOpportunity.save()
        newOpportunity = await Opportunity.findById(newOpportunity.id).populate('user').populate('sourceContact')
        return newOpportunity
      } catch (err) {
        console.log(err)
      }
    },

    updateOpportunity: async ({id, opportunity}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const updatedOpportunity = await Opportunity.findByIdAndUpdate(id, opportunity, {new: true}).populate('sourceContact')
      return updatedOpportunity
    },

    deleteOpportunity: async ({id}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const deletedOpportunity = await Opportunity.findByIdAndRemove(id)
      return deletedOpportunity
    }
}