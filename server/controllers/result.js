import Result from '../models/Result'
import Student from '../models/Student'

// Create a new result
export const createResult = async (req, res) => {
  try {
    const {
      studentId,
      examName,
      subject,
      marks,
      grade,
      remarks,
      teacherComments,
    } = req.body

    const newResult = new Result({
      studentId,
      examName,
      subject,
      marks,
      grade,
      remarks,
      teacherComments,
      date: new Date(),
    })

    // Save the result
    await newResult.save()

    res
      .status(201)
      .json({ message: 'Result created successfully', result: newResult })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all results
export const getAllResults = async (req, res) => {
  try {
    const results = await Result.find()
    res.status(200).json(results)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get result by ID
export const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id)

    if (!result) {
      return res.status(404).json({ message: 'Result not found' })
    }

    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Update result by ID
export const updateResultById = async (req, res) => {
  try {
    const { examName, subject, marks, grade, remarks, teacherComments } =
      req.body

    const updatedResult = await Result.findByIdAndUpdate(
      req.params.id,
      { $set: { examName, subject, marks, grade, remarks, teacherComments } },
      { new: true }
    )

    if (!updatedResult) {
      return res.status(404).json({ message: 'Result not found' })
    }

    res
      .status(200)
      .json({ message: 'Result updated successfully', result: updatedResult })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete result by ID
export const deleteResultById = async (req, res) => {
  try {
    const result = await Result.findByIdAndDelete(req.params.id)

    if (!result) {
      return res.status(404).json({ message: 'Result not found' })
    }

    res.status(200).json({ message: 'Result deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
