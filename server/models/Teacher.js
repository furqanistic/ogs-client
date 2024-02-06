import mongoose from 'mongoose'

const TeacherSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    gender: {
      type: String,
    },
    cell: {
      type: String,
    },
    scEmail: {
      type: String,
    },
    gmail: {
      type: String,
    },
    address: {
      type: String,
    },
    department: {
      type: String,
    },
    others: {
      type: String,
    },
  },
  { timestamps: true }
)
export default mongoose.model('Teacher', TeacherSchema)
