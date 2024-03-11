import Fee from '../models/Fee.js'
import Student from '../models/Student.js'
import User from '../models/User.js'

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

// Create Fee details for a student
export const createFeeDetailsForStudent = async (req, res) => {
  try {
    const { studentId, academicYear, monthlyFees, fines } = req.body

    const newFeeDetails = new Fee({
      studentId,
      academicYear,
      monthlyFees,
      fines,
    })

    await newFeeDetails.save()

    res.status(201).json({
      message: 'Fee details added successfully',
      feeDetails: newFeeDetails,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
// Get Fee details by Student ID
export const getFeeDetailsByStudentId = async (req, res) => {
  try {
    const { studentId, academicYear } = req.query // Assuming academicYear is optional

    const query = { studentId }
    if (academicYear) query.academicYear = academicYear

    const feeDetails = await Fee.find(query)

    if (!feeDetails.length) {
      return res
        .status(404)
        .json({ message: 'No fee details found for the given student' })
    }

    res.status(200).json(feeDetails)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
// Update Fee details for a student
export const updateFeeDetailsById = async (req, res) => {
  try {
    const { feeDetailsId } = req.params // Assuming the feeDetailsId is passed as a URL parameter
    const { monthlyFees, fines } = req.body

    const updatedFeeDetails = await Fee.findByIdAndUpdate(
      feeDetailsId,
      { $set: { monthlyFees, fines } },
      { new: true }
    )

    if (!updatedFeeDetails) {
      return res.status(404).json({ message: 'Fee details not found' })
    }

    res.status(200).json({
      message: 'Fee details updated successfully',
      feeDetails: updatedFeeDetails,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
