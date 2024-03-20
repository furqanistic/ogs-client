import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createError } from '../error.js'
import User from '../models/User.js'

// Signup function (unchanged)
export const signup = async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).send('User already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hash,
      role,
    })

    await newUser.save()
    res.status(201).send('User created successfully')
  } catch (err) {
    next(err)
  }
}

// Signin function
export const signin = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return next(createError(404, 'User not found'))
    }

    const isCorrect = await bcrypt.compareSync(password, user.password)
    if (!isCorrect) {
      return next(createError(401, 'Invalid password'))
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT)
    const { password: userPassword, ...others } = user._doc

    // Set token as a session cookie
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(others)
  } catch (err) {
    next(err)
  }
}

// Find user by ID
export const findUserById = async (req, res, next) => {
  const userId = req.params.id

  try {
    const user = await User.findById(userId)
    if (!user) {
      return next(createError(404, 'User not found'))
    }

    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

// Find all users
export const findAllUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

// Delete user by ID
export const deleteUserById = async (req, res, next) => {
  const userId = req.params.id

  try {
    const user = await User.findByIdAndDelete(userId)
    if (!user) {
      return next(createError(404, 'User not found'))
    }

    res.status(200).send('User deleted successfully')
  } catch (err) {
    next(err)
  }
}
