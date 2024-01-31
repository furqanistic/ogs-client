import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Admin', 'Teacher', 'Management', 'Student'],
      required: true,
    },
    notifications: {
      type: [String],
    },
  },
  { timestamps: true }
)

export default mongoose.model('User', UserSchema)
