
import { buildSchema } from 'graphql'
import { ActivityTypeSchema } from './ActivityType'
import { ContactSchema } from './Contact'
import { UserSchema } from './User'
import { AuthSchema } from './Auth'
import { NoteSchema } from './Note'
import { OpportunitySchema } from './Opportunity'
import { ActivitySchema } from './Activity'

export const typeDefs = buildSchema(`
  scalar Date

  type Query {
      _empty: String
  }
  type Mutation {
      _empty: String
  }
  ${ActivityTypeSchema}
  ${ContactSchema}
  ${UserSchema}
  ${AuthSchema}
  ${NoteSchema}
  ${OpportunitySchema}
  ${ActivitySchema}
`)