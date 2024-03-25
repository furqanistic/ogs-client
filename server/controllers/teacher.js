// controllers/teacherController.js

import Teacher from '../models/Teacher.js'

// Create a new teacher form
export const submitTeacherForm = async (req, res) => {
  try {
    // Extract all fields from the request body
    const formData = req.body

    // Create a new teacher instance using the Teacher schema
    const newTeacher = new Teacher(formData)

    // Save the teacher form data to the database
    await newTeacher.save()

    // Send a success response
    res.status(201).json({ message: 'Teacher form submitted successfully' })
  } catch (error) {
    // Handle errors and send an error response
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all teacher forms
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find()
    res.status(200).json(teachers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get a specific teacher form by ID
export const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }
    res.status(200).json(teacher)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Update a specific teacher form by ID
export const updateTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }

    res.status(200).json(teacher)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete a specific teacher form by ID
export const deleteTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id)

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }

    // Teacher deleted successfully, and sending a status code 200 with a message
    res.status(200).json({ message: 'Teacher deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// get required data of teacher

export const getAllTeachersOption = async (req, res) => {
  try {
    const teachers = await Teacher.find(
      {},
      { _id: 1, fname: 1, lname: 1, department: 1, gmail: 1 }
    ).sort({ fname: 1 }) // Include _id
    res.status(200).json(teachers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
