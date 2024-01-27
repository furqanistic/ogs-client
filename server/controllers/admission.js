// controllers/admissionController.js
import Admission from '../models/Admission.js'

// Create a new admission form
export const submitAdmissionForm = async (req, res) => {
  try {
    // Extract all fields from the request body
    const formData = req.body

    // Create a new admission instance using the Admission schema
    const newAdmission = new Admission(formData)

    // Save the admission form data to the database
    await newAdmission.save()

    // Send a success response
    res.status(201).json({ message: 'Admission form submitted successfully' })
  } catch (error) {
    // Handle errors and send an error response
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all admission forms
export const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find()
    res.status(200).json(admissions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get a specific admission form by ID
export const getAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findById(req.params.id)
    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' })
    }
    res.status(200).json(admission)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Update a specific admission form by ID
export const updateAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )

    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' })
    }

    res.status(200).json(admission)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete a specific admission form by ID
export const deleteAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id)

    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' })
    }

    // Admission deleted successfully, and sending a status code 200 with a message
    res.status(200).json({ message: 'Admission deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
