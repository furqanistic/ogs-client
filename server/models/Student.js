import mongoose from 'mongoose'
import Result from './Result'

const StudentSchema = new mongoose.Schema(
  {
    admissionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admission',
      required: true,
    },
    attendance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendance',
      },
    ],
    results: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Result',
      },
    ],
    classInfo: {
      className: {
        type: String,
      },
      section: {
        type: String,
      },
      rollNumber: {
        type: String,
        unique: true,
      },
      academicYear: {
        type: String,
        // You might want to use a specific format (e.g., '2023-2024') or a numeric representation.
      },
      classTeacher: {
        type: String,
        // You might want to use a reference to the teacher schema if you have one.
      },
      // Add more class-related fields as needed
    },
    personalInfo: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      dateOfBirth: {
        type: Date,
      },
      gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
      },
      address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
      },
      contactInfo: {
        email: String,
        phone: String,
      },
      // Add more personal information fields as needed
    },
    guardianInfo: {
      guardianName: {
        type: String,
      },
      relationship: {
        type: String,
      },
      guardianOccupation: {
        type: String,
      },
      guardianContact: {
        phone: String,
        email: String,
      },
      // Add more guardian information fields as needed
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Student', StudentSchema)
