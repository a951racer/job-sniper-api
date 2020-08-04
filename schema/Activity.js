export const ActivitySchema = `
  
  extend type Query {
    activities: [Activity!]!
  }

  extend type Mutation {
    createActivity(activity: ActivityInput!): Activity
    updateActivity(id: ID!, activity: ActivityInput!): Activity
    deleteActivity(id: ID!): Activity
  }

  type Activity {
    id: ID!
    activityType: ActivityType!
    activityDate: Date!
    comments: String!
    links: [String!],
    files: [String!],
    opportunity: Opportunity
    contacts: [Contact!]
    created: Date
    lastUpdated: Date
    user: User
  }

  input ActivityInput {
    activityType: String!
    activityDate: String!
    comments: String!
    links: [String!],
    files: [String!],
    opportunity: String
    contacts: [String!]
  }
`