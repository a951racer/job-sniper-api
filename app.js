import express from 'express'
import playground from 'graphql-playground-middleware-express'
import cors from 'cors'
import helmet from 'helmet'
import graphqlHttp from 'express-graphql'
import mongoose from 'mongoose'

import { typeDefs } from './schema'
import resolvers from './resolvers'
import isAuth from './middleware/is-auth'

require('dotenv').config()

const startServer = async () => {
  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use(helmet())

  app.use(isAuth)
  
  app.use('/playground', playground({ endpointUrl: '/graphql' }))

  app.use(
    '/graphql',
    graphqlHttp({
      schema: typeDefs,
      rootValue: resolvers,
      graphiql: true
    })
  )

  await mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
  
  app.listen({port: process.env.PORT}, () =>
    console.log(`Server listening on port: ${process.env.PORT}`)
  )
}

startServer()