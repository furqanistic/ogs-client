import * as yup from 'yup'

export const TeachFormScehma = yup.object().shape({
  fname: yup.string().required('Please provide first   name...'),
  lname: yup.string().required('Please provide a last name...'),
  cell: yup
    .string()
    .length(11, 'Mobile number must be exactly 11 digits e.g 03123456789')
    .required('Please provide a mobile number...'),
  profileimg: yup.string(),
  department: yup.string().required('Please provide a department...'),
  gmail: yup.string().email('Please follow this format : name@example.com'),
  address: yup.string().required('Please enter an address...'),
  gender: yup.string().required('Please specify a gender...'),
})
