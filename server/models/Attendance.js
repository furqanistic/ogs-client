import mongoose from 'mongoose'

const AttendanceSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['Present', 'Absent'],
      required: true,
    },
    session: {
      type: String,
      // You might use a specific format or enum values based on your needs (e.g., 'Morning', 'Afternoon').
    },
    subject: {
      type: String,
      // You can add subject-related information if applicable.
    },
    notes: {
      type: String,
      // Any additional notes related to the attendance.
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Attendance', AttendanceSchema)
