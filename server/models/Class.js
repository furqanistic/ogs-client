import mongoose from 'mongoose'

const ClassSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
    },
    subjects: [
      {
        subjectName: String,
        teacher: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Teacher',
        },
      },
    ],
    classRoom: {
      type: String,
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    daysOfWeek: [
      {
        type: String, // e.g., Monday, Tuesday, etc.
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    classDescription: {
      type: String,
    },
    classNotes: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Class', ClassSchema)
