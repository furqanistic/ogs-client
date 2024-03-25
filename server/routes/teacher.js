// routes/teacherRoutes.js
import express from 'express'
import {
  deleteTeacherById,
  getAllTeachers,
  getAllTeachersOption,
  getTeacherById,
  submitTeacherForm,
  updateTeacherById,
} from '../controllers/teacher.js'

const router = express.Router()

// Submit a teacher form
router.post('/submit', submitTeacherForm)

// Get all teacher with specific field in array form
router.get('/options', getAllTeachersOption)

// Get all teacher forms
router.get('/', getAllTeachers)

// Get a specific teacher form by ID
router.get('/:id', getTeacherById)

// Update a specific teacher form by ID
router.put('/:id', updateTeacherById)

// Delete a specific teacher form by ID
router.delete('/:id', deleteTeacherById)

export default router
