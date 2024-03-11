import express from 'express'

import {
  createStudent,
  deleteStudentById,
  getAllStudents,
  getStudentById,
  updateStudentById,
} from '../controllers/student.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// Create a new student
router.post('/', verifyToken, createStudent)

// Get all students
router.get('/', verifyToken, getAllStudents)

// Get a single student by ID
router.get('/:id', verifyToken, getStudentById)

// Update a student by ID
router.put('/:id', verifyToken, updateStudentById)

// Delete a student by ID
router.delete('/:id', verifyToken, deleteStudentById)

// You can also add routes for fee-related operations here
// Example: router.post('/:id/fee', verifyToken, addFeeDetailsForStudent);

export default router
