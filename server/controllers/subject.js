// controllers/subjectController.js

import Subject from '../models/Subject.js'

// Create a new subject form
export const submitSubjectForm = async (req, res) => {
  try {
    // Extract all fields from the request body
    const formData = req.body

    // Create a new subject instance using the subject schema
    const newSubject = new Subject(formData)

    // Save the subject form data to the database
    await newSubject.save()

    // Send a success response
    res.status(201).json({ message: 'Subject form submitted successfully' })
  } catch (error) {
    // Handle errors and send an error response
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all subject forms
export const getAllSubject = async (req, res) => {
  try {
    const subject = await Subject.find()
    res.status(200).json(subject)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get a specific subject form by ID
export const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id)
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' })
    }
    res.status(200).json(Subject)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Update a specific subject form by ID
export const updateSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )

    if (!subject) {
      return res.status(404).json({ message: 'subject not found' })
    }

    res.status(200).json(subject)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete a specific subject form by ID
export const deleteSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id)

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' })
    }

    // subject deleted successfully, and sending a status code 200 with a message
    res.status(200).json({ message: 'Subject deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// get required data of subject

export const getAllSubjectOption = async (req, res) => {
  try {
    const subject = await Subject.find(
      {},
      { _id: 1, fname: 1, lname: 1, department: 1, gmail: 1 }
    ).sort({ fname: 1 }) // Include _id
    res.status(200).json(subject)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
