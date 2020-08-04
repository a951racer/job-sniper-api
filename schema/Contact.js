export const ContactSchema = `
  
  extend type Query {
    contacts: [Contact!]!
  }

  extend type Mutation {
    createContact(contact: ContactInput!): Contact
    updateContact(id: ID!, contact: ContactInput!): Contact
    deleteContact(id: ID!): Contact
  }

  type Contact {
    id: ID!
    firstName: String!
    lastName: String!
    organization: String
    phone: String
    email: String
    comments: String
    created: Date
    lastUpdated: Date
    user: User
  }

  input ContactInput {
    firstName: String!
    lastName: String!
    organization: String
    phone: String
    email: String
    comments: String
  }
`