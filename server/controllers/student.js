import Student from '../models/Student'
import User from '../models/User'

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const { admissionId, classInfo, personalInfo, guardianInfo } = req.body

    const newStudent = new Student({
      admissionId,
      classInfo,
      personalInfo,
      guardianInfo,
    })

    // Save the student
    await newStudent.save()

    // Update user's studentInfo reference
    const user = await User.findById(req.user.id)
    user.studentInfo = newStudent._id
    await user.save()

    res
      .status(201)
      .json({ message: 'Student created successfully', student: newStudent })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find()
    res.status(200).json(students)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)

    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.status(200).json(student)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Update student by ID
export const updateStudentById = async (req, res) => {
  try {
    const { classInfo, personalInfo, guardianInfo } = req.body

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: { classInfo, personalInfo, guardianInfo } },
      { new: true }
    )

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.status(200).json({
      message: 'Student updated successfully',
      student: updatedStudent,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete student by ID
export const deleteStudentById = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id)

    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }

    // If needed, remove the reference from the associated user
    const user = await User.findOne({ studentInfo: student._id })
    if (user) {
      user.studentInfo = null
      await user.save()
    }

    res.status(200).json({ message: 'Student deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
