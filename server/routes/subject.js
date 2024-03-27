// routes/teacherRoutes.js
import express from 'express'
import {
  deleteSubjectById,
  getAllSubject,
  getAllSubjectOption,
  getSubjectById,
  submitSubjectForm,
  updateSubjectById,
} from '../controllers/subject.js'

const router = express.Router()

// Submit a teacher form
router.post('/submit', submitSubjectForm)

// Get all teacher with specific field in array form
router.get('/options', getAllSubjectOption)

// Get all teacher forms
router.get('/', getAllSubject)

// Get a specific teacher form by ID
router.get('/:id', getSubjectById)

// Update a specific teacher form by ID
router.put('/:id', updateSubjectById)

// Delete a specific teacher form by ID
router.delete('/:id', deleteSubjectById)

export default router
