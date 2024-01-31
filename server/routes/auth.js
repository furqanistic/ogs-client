import express from 'express'
import {
  deleteUserById,
  findAllUsers,
  findUserById,
  signin,
  signup,
} from '../controllers/auth.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// Signup
router.post('/signup', signup)

// SignIn
router.post('/signin', signin)

// Find user by ID
router.get('/user/:id', verifyToken, findUserById)

// Find all users
router.get('/users', verifyToken, findAllUsers)

// Delete user by ID
router.delete('/user/:id', verifyToken, deleteUserById)

export default router
