import * as yup from 'yup'

const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/

export const admissionSchema = yup.object().shape({
  name: yup.string().required('Please provide a name...'),
  grade: yup.string().required('Please specify a grade...'),
  dob: yup.date().required('Date of birth is required...'),
  fname: yup.string().required("Father's name is required..."),
  mname: yup.string().required("Mother's name is required..."),
  address: yup.string().required('Please enter an address...'),
  prevSchool: yup.string(),
  fcnic: yup
    .string()
    .matches(cnicRegex, 'Please follow this CNIC format : 12345-1213112-7'),
  fcell: yup.string().max(11, 'Mobile number must not exceed 11 digits'),
  femail: yup.string().email('Please follow this format : name@example.com'),
  foccupation: yup.string(),
  moccupation: yup.string(),
  mcell: yup.string().max(11, 'Mobile number must not exceed 11 digits'),
  others: yup.string(),
})
