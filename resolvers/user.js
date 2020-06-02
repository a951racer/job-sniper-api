import bcrypt from 'bcryptjs'
import { User } from '../models/User'

export const userResolvers = {
    users: (args, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')  // add isAdmin check
      return User.find()
    },

    createUser: async ({ user }, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const existingUser = await User.findOne({ email: user.email });
      if (existingUser) {
        console.error('User exists already.');
      }
      const hashedPassword = await bcrypt.hash(user.password, 12)
      const newUser = new User({
        ...user,
        password: hashedPassword
      })
      await newUser.save()
      return newUser
    },

    updateUser: async ({id, user}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const updatedUser = await User.findByIdAndUpdate(id, user, {new: true})
      return updatedUser
    },

    deleteUser: async ({id}, req) => {
      if (!req.isAuth) throw new Error('you must be logged in')
      const deletedUser = await User.findByIdAndRemove(id)
      return deletedUser
    }
}