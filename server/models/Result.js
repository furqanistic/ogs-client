import mongoose from 'mongoose'

const ResultSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    examName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      // You might calculate and store the grade based on the marks.
    },
    remarks: {
      type: String,
      // Additional remarks or comments about the student's performance.
    },
    date: {
      type: Date,
      // Date when the result was recorded.
    },
    teacherComments: {
      type: String,
      // Comments provided by the teacher about the student's performance.
    },
    // Add more result-related fields as needed
    // For example, you might include fields for percentile, rank, etc.
  },
  { timestamps: true }
)

export default mongoose.model('Result', ResultSchema)
