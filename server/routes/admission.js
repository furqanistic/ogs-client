// routes/admissionRoutes.js
import express from 'express'
import {
  deleteAdmissionById,
  deleteAdmissionsByIds,
  getAdmissionById,
  getAllAdmissions,
  submitAdmissionForm,
  updateAdmissionById,
} from '../controllers/admission.js'

const router = express.Router()

// Submit an admission form
router.post('/submit', submitAdmissionForm)

// Get all admission forms
router.get('/', getAllAdmissions)

// Get a specific admission form by ID
router.get('/:id', getAdmissionById)

// Update a specific admission form by ID
router.put('/:id', updateAdmissionById)

// Delete a specific admission form by ID
router.delete('/:id', deleteAdmissionById)

// New route to delete multiple admission forms by IDs
router.post('/delete', deleteAdmissionsByIds)

export default router
