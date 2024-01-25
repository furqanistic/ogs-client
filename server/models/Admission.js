import mongoose from 'mongoose'

const AdmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    prevSchool: {
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
    mname: {
      type: String,
    },
    moccupation: {
      type: String,
    },
    mcell: {
      type: String,
    },
    address: {
      type: String,
    },
    others: {
      type: String,
    },
  },
  { timestamps: true }
)
export default mongoose.model('User', AdmissionSchema)
