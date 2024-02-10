import mongoose from 'mongoose'

const FeeSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
    },
    paymentMethod: {
      type: String,
      // You might use an enum or specific values based on payment methods (e.g., 'Cash', 'Credit Card', 'Bank Transfer').
    },
    transactionId: {
      type: String,
      // Identifier for the transaction, if applicable.
    },
    description: {
      type: String,
      // Additional information or notes about the fee payment.
    },
    semester: {
      type: String,
      // Indicate the semester for which the fee is applicable (e.g., 'Spring 2024').
    },
    academicYear: {
      type: String,
      // Indicate the academic year for which the fee is applicable (e.g., '2023-2024').
    },
    feeType: {
      type: String,
      // Indicate the type of fee (e.g., 'Tuition Fee', 'Library Fee', 'Exam Fee').
    },
    status: {
      type: String,
      enum: ['Paid', 'Pending', 'Late'],
      // Indicate the status of the fee payment.
    },
    // Add more fee-related fields as needed
  },
  { timestamps: true }
)

export default mongoose.model('Fee', FeeSchema)
