export const ContactSchema = `
  
  extend type Query {
    contacts: [Contact!]!
  }

  extend type Mutation {
    createContact(contact: ContactInput!): Contact
    updateContact(id: ID!, contact: ContactInput!): Contact
    deleteContact(id: ID!): Contact
  }

  type Phone {
    label: String!
    phone: String!
  }

  type Email {
    label: String!
    email: String!
  }

  input PhoneInput {
    label: String!
    phone: String!
  }

  input EmailInput {
    label: String!
    email: String!
  }

  type Contact {
    id: ID!
    firstName: String!
    lastName: String!
    phoneNumbers: [Phone!]
    emailAddresses: [Email!]
    created: Date
    lastUpdated: Date
    user: User
  }

  input ContactInput {
    firstName: String!
    lastName: String!
    phoneNumbers: [PhoneInput!]
    emailAddresses: [EmailInput!]
  }
`