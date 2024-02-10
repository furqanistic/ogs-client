import Fee from '../models/Fee'
import Student from '../models/Student'

// Create a new fee record
export const createFee = async (req, res) => {
  try {
    const {
      studentId,
      amount,
      paymentDate,
      paymentMethod,
      transactionId,
      description,
      semester,
      academicYear,
      feeType,
      status,
    } = req.body

    const newFee = new Fee({
      studentId,
      amount,
      paymentDate,
      paymentMethod,
      transactionId,
      description,
      semester,
      academicYear,
      feeType,
      status,
    })

    // Save the fee record
    await newFee.save()

    res
      .status(201)
      .json({ message: 'Fee record created successfully', fee: newFee })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all fee records
export const getAllFees = async (req, res) => {
  try {
    const fees = await Fee.find()
    res.status(200).json(fees)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get fee record by ID
export const getFeeById = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id)

    if (!fee) {
      return res.status(404).json({ message: 'Fee record not found' })
    }

    res.status(200).json(fee)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Update fee record by ID
export const updateFeeById = async (req, res) => {
  try {
    const {
      amount,
      paymentDate,
      paymentMethod,
      transactionId,
      description,
      semester,
      academicYear,
      feeType,
      status,
    } = req.body

    const updatedFee = await Fee.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          amount,
          paymentDate,
          paymentMethod,
          transactionId,
          description,
          semester,
          academicYear,
          feeType,
          status,
        },
      },
      { new: true }
    )

    if (!updatedFee) {
      return res.status(404).json({ message: 'Fee record not found' })
    }

    res
      .status(200)
      .json({ message: 'Fee record updated successfully', fee: updatedFee })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete fee record by ID
export const deleteFeeById = async (req, res) => {
  try {
    const fee = await Fee.findByIdAndDelete(req.params.id)

    if (!fee) {
      return res.status(404).json({ message: 'Fee record not found' })
    }

    res.status(200).json({ message: 'Fee record deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
