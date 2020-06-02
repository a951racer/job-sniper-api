export const ActivityTypeSchema = `
  
  extend type Query {
    activityTypes: [ActivityType!]!
  }

  extend type Mutation {
    createActivityType(activityType: ActivityTypeInput!): ActivityType
    updateActivityType(id: ID!, activityType: ActivityTypeInput!): ActivityType
    deleteActivityType(id: ID!): ActivityType
  }

  type ActivityType {
    id: ID!
    activityType: String!
    created: Date
    lastUpdated: Date
  }

  input ActivityTypeInput {
    activityType: String!
  }
`
