export const UserSchema = `
  
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    createUser(user: UserInput!): User
    updateUser(id: ID!, user: UserInput!): User
    deleteUser(id: ID!): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    isValidated: Boolean!
    tags: [String!]
    resumes: [String!]
    coverLetters: [String!]
    created: Date
    lastUpdated: Date
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isAdmin: Boolean
    isValidated: Boolean
    tags: [String!]
    resumes: [String!]
    coverLetters: [String!]
  }
`