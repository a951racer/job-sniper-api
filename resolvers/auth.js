import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../models/User'

export const authResolvers = {
    login: async ({ email, password }, req) => {
      const user = await User.findOne({ email: email })
      if (!user) throw new Error('User does not exist!')

      const isEqual = await bcrypt.compare(password, user.password)
      if (!isEqual) throw new Error('Password is incorrect!')

      if (!user.isValidated) throw new Error('User hasn\'t been validated!')

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        'somesupersecretkey',
        { expiresIn: '1h' }
      )

      return { userId: user.id, isAdmin: user.isAdmin, token: token, tokenExpiration: 1 }
    }
}