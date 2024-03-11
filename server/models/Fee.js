import mongoose from 'mongoose'

const MonthlyFeeDetailSchema = new mongoose.Schema({
  month: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Paid', 'Pending', 'Late'],
    required: true,
  },
  paymentDate: Date,
  paymentMethod: String,
  transactionId: String,
})

const FineDetailSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    // Examples: 'Late Payment', 'Library Fine', etc.
  },
  status: {
    type: String,
    enum: ['Paid', 'Unpaid'],
    required: true,
  },
  paymentDate: Date,
})

const FeeSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    academicYear: {
      type: String,
      required: true,
      // e.g., '2023-2024'
    },
    monthlyFees: [MonthlyFeeDetailSchema],
    fines: [FineDetailSchema],
    // You can still include fields for semester, feeType, etc., if they provide value
  },
  { timestamps: true }
)

export default mongoose.model('Fee', FeeSchema)
