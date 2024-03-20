import mongoose from 'mongoose'

const AdmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    prevSchool: {
      type: String,
    },
    grade: {
      type: String,
    },
    dob: {
      type: Date,
    },
    fname: {
      type: String,
    },
    fcnic: {
      type: String,
    },
    fcell: {
      type: String,
    },
    femail: {
      type: String,
    },
    foccupation: {
      type: String,
    },
    feducation: {
      type: String,
    },
    mname: {
      type: String,
    },
    moccupation: {
      type: String,
    },
    meducation: {
      type: String,
    },
    mcell: {
      type: String,
    },
    mIsWorking: {
      type: String,
    },
    address: {
      type: String,
    },
    others: {
      type: String,
    },
    status: {
      type: String,
      default: 'Waiting',
    },
  },
  { timestamps: true }
)
export default mongoose.model('Admission', AdmissionSchema)
