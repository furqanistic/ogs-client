import Admission from '../models/Admission.js'
import Student from '../models/Student.js'

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

// Delete multiple admission forms by IDs
export const deleteAdmissionsByIds = async (req, res) => {
  try {
    const admissionIds = req.body.ids

    // Validate if admissionIds is an array and not empty
    if (!Array.isArray(admissionIds) || admissionIds.length === 0) {
      return res.status(400).json({ message: 'Invalid admission IDs provided' })
    }

    const deletedAdmissions = await Admission.deleteMany({
      _id: { $in: admissionIds },
    })

    // Check if any admission forms were deleted
    if (deletedAdmissions.deletedCount === 0) {
      return res.status(404).json({ message: 'Admissions not found' })
    }

    // Admission forms deleted successfully, and sending a status code 200 with a message
    res.status(200).json({ message: 'Admissions deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all admission forms with status "Enrolled"
export const getEnrolledAdmissions = async (req, res) => {
  try {
    const enrolledAdmissions = await Admission.find({ status: 'Enrolled' })
    res.status(200).json(enrolledAdmissions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const moveAdmissionToStudent = async (req, res) => {
  try {
    // Find the admission by ID
    const admission = await Admission.findById(req.params.id)

    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' })
    }

    // Extract values from admission
    const {
      name,
      prevSchool,
      grade,
      dob,
      fname,
      fcnic,
      fcell,
      femail,
      foccupation,
      mname,
      moccupation,
      mcell,
      address,
      others,
    } = admission

    // Create a new student using extracted values
    const student = new Student({
      personalInfo: {
        name,
        prevSchool,
        dateOfBirth: dob,
        address,
        contactInfo: {
          email: femail,
          phone: fcell,
        },
      },
      guardianInfo: {
        guardianName: fname,
        guardianOccupation: foccupation,
        guardianContact: {
          phone: fcell,
          email: femail,
        },
      },
      classInfo: {
        className: grade,
      },
    })

    // Save the new student
    await student.save()

    // Update the admission status
    admission.status = 'Enrolled'
    await admission.save()

    // Optionally, you may want to delete the admission from the Admission collection
    // await Admission.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ message: 'Admission moved to student successfully', student })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete all admissions with status "Enrolled"
export const deleteEnrolledAdmissions = async (req, res) => {
  try {
    const deletedAdmissions = await Admission.deleteMany({ status: 'Enrolled' })

    // Check if any admission forms were deleted
    if (deletedAdmissions.deletedCount === 0) {
      return res.status(404).json({ message: 'No enrolled admissions found' })
    }

    // Admissions deleted successfully, and sending a status code 200 with a message
    res
      .status(200)
      .json({ message: 'Enrolled admissions deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete all admissions with status "Waiting"
export const deleteWaitingAdmissions = async (req, res) => {
  try {
    const deletedAdmissions = await Admission.deleteMany({ status: 'Waiting' })

    // Check if any admission forms were deleted
    if (deletedAdmissions.deletedCount === 0) {
      return res.status(404).json({ message: 'No waiting admissions found' })
    }

    // Admissions deleted successfully, and sending a status code 200 with a message
    res.status(200).json({ message: 'Waiting admissions deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
