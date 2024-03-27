import mongoose from 'mongoose'

const SubjectSchema = new mongoose.Schema(
  {
    SubjectName: {
      type: String,
      required: true,
    },
    NumOfStudents: {
      type: String,
      default: 0,
    },
    NumOfTeachers: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Subject', SubjectSchema)
