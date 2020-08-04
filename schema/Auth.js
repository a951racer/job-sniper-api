export const AuthSchema = `
  
  extend type Query {
    login(email: String!, password: String!): AuthData!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
`
