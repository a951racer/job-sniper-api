export const OpportunitySchema = `
  
  extend type Query {
    opportunities: [Opportunity!]!
  }

  extend type Mutation {
    createOpportunity(opportunity: OpportunityInput!): Opportunity
    updateOpportunity(id: ID!, opportunity: OpportunityInput!): Opportunity
    deleteOpportunity(id: ID!): Opportunity
  }

  type Opportunity {
    id: ID!
    employerName: String!
    jobTitle: String!
    source: String!
    initialContactDate: Date!
    sourceContact: Contact
    employerURL: String
    tags: [String]
    links: [String]
    files: [String]
    created: Date
    lastUpdated: Date
    user: User
  }

  input OpportunityInput {
    employerName: String!
    jobTitle: String!
    source: String!
    initialContactDate: Date!
    sourceContact: String
    employerURL: String
    tags: [String],
    links: [String],
    files: [String],
  }
`