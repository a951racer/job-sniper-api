import { merge } from 'lodash';
import { activityTypeResolvers } from './activityType'
import { contactResolvers } from './contact'
import { userResolvers } from './user'
import { authResolvers } from './auth'
import { noteResolvers } from './note'
import { opportunityResolvers } from './opportunity'
import { activityResolvers } from './activity'

const resolvers = {}
merge(resolvers,
      activityTypeResolvers,
      contactResolvers,
      userResolvers,
      authResolvers,
      noteResolvers,
      opportunityResolvers,
      activityResolvers
      )
module.exports = resolvers;