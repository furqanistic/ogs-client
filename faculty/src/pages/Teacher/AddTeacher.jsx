import { Error } from '@mui/icons-material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import styled from 'styled-components'
import DisplayCard from '../../DisplayCard'
import Layout from '../../Layout'
import Loader from '../../Loader/Loader'
import { TeachFormScehma } from '../../Schemas'
import Topbar from '../../components/Layout/Topbar'
import { axiosInstance } from '../../config'

const Wrap = styled.div`
  max-width: 1200px;
  background-color: #133b92;
  color: white;
  background-size: cover;
  margin: 4rem auto;
  border-radius: 5px;
  padding: 2rem;
  margin: 0 4rem;
  min-height: 100%;
  margin-bottom: 2rem;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 900px;
  }
`

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const FormText = styled.span`
  font-size: 1.1rem;
  margin-right: 10px;
  font-weight: 500;
  min-width: 170px;
  @media (max-width: 900px) {
    font-size: 0.8rem;
    min-width: 100px;
    font-weight: 400;
    margin-right: 5px;
  }
`
const FormInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  border-radius: 0;
  -webkit-appearance: none;
  &:focus {
    border: 1px solid #fff;
    border-radius: 10px;
    padding-left: 10px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
`

const InputSet = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 900px) {
    width: 95%;
    margin-left: 5px;
  }
`
const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
const InputSetTwo = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-left: 20px;
  width: 100%;
  @media (max-width: 900px) {
    width: 95%;
    margin-left: 5px;
  }
`

const FormTextField = styled.textarea`
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  resize: none;
`
const FieldsHeading = styled.p`
  font-size: 1.5rem;
  text-align: start;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: underline;
  font-style: italic;
  color: #ffffff;
  padding: 0.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0.3rem;
  }
`
const SubSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`

const SelectCat = styled.select`
  width: 90%;
  border-radius: 4px;
  border: 1px solid #ffffff;
  color: white;
  background-color: rgba(255, 255, 255, 0);
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  @media (max-width: 900px) {
    margin-bottom: 20px;
    width: 100%;
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
  }
`
const SelectOpt = styled.option`
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubmitBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: 1px solid white;
  padding: 0.6rem 1.4rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 500px;
  overflow: hidden;
  background: ghostwhite;
  color: #100164;

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    color: #ffffff;
  }

  &:hover span {
    color: #04003d;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: '';
    background: #03002e;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`
const CardBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73); /* Adjust the opacity as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure it's above other content */
`
const ErrMsg = styled.p`
  font-size: 0.8rem;
  color: #ff3b3b;
  padding: 0.5rem;
  text-align: start;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AddTeacher = () => {
  // all the states here
  const [showCard, setShowCard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const GenderOptions = ['Choose', 'Male', 'Female', 'Prefer Not To Say']
  // all the functions here

  const handleAdmissions = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axiosInstance.post('teacher/submit/', {
        fname: values.fname,
        lname: values.lname,
        cell: values.cell,
        profileimg: values.profileimg,
        department: values.department,
        gmail: values.gmail,
        address: values.address,
        gender: values.gender,
      })
      setShowCard(true)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  // handling forms data
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        lname: '',
        cell: '',
        profileimg: '',
        department: '',
        gmail: '',
        address: '',
        gender: '',
      },
      validationSchema: TeachFormScehma,
      handleAdmissions,
    })
  return (
    <Layout>
      <Topbar title='Teachers' />
      <form onSubmit={handleSubmit}>
        <Wrap id='booking-form-wrap'>
          <FieldsHeading>Teachers Form</FieldsHeading>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>First Name: </FormText>
                <FormInput
                  placeholder='Enter First Name...'
                  type='text'
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='fname'
                />
              </InputSet>
              {errors.fname && touched.fname && (
                <ErrMsg>
                  <Error style={{ marginRight: '5px' }} /> {errors.fname}
                </ErrMsg>
              )}
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Last Name: </FormText>
                <FormInput
                  placeholder='Enter Last Name...'
                  type='text'
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='lname'
                />
              </InputSet>
              {errors.lname && touched.lname && (
                <ErrMsg>
                  <Error style={{ marginRight: '5px' }} /> {errors.lname}
                </ErrMsg>
              )}
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSetTwo>
                <FormText>Gender: </FormText>
                <SelectCat
                  name='gender'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='gender'
                  value={values.gender}
                >
                  {GenderOptions.map((category) => (
                    <SelectOpt key={category} value={category}>
                      {category}
                    </SelectOpt>
                  ))}
                </SelectCat>
              </InputSetTwo>
              {errors.gender && touched.gender && (
                <ErrMsg>
                  <Error style={{ marginRight: '5px' }} /> {errors.gender}
                </ErrMsg>
              )}
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Cell#: </FormText>
                <FormInput
                  placeholder='Enter Mobile Number...'
                  type='text'
                  value={values.cell}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='cell'
                />
              </InputSet>
              {errors.cell && touched.cell && (
                <ErrMsg>
                  <Error style={{ marginRight: '5px' }} /> {errors.cell}
                </ErrMsg>
              )}
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>E-mail: </FormText>
                <FormInput
                  placeholder='Enter Email...'
                  type='text'
                  value={values.gmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='gmail'
                />
              </InputSet>
              {errors.gmail && touched.gmail && (
                <ErrMsg>
                  <Error style={{ marginRight: '5px' }} /> {errors.gmail}
                </ErrMsg>
              )}
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Address: </FormText>
                <FormInput
                  placeholder='Enter Address...'
                  type='text'
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='address'
                />
              </InputSet>
              {errors.address && touched.address && (
                <ErrMsg>
                  <Error style={{ marginRight: '5px' }} /> {errors.address}
                </ErrMsg>
              )}
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Department: </FormText>
                <FormInput
                  placeholder='Enter Department Name...'
                  type='text'
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='department'
                />
              </InputSet>
              {errors.department && touched.department && (
                <ErrMsg>
                  <Error style={{ marginRight: '5px' }} /> {errors.department}
                </ErrMsg>
              )}
            </ErrorWrap>
          </InputWrap>

          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Other Information / Notes :</FormText>
                <FormTextField
                  placeholder='Write here...'
                  type='text'
                  value={values.others}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id='others'
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <SubSet>
            <SubmitBtn>
              <span onClick={handleAdmissions}>Submit</span>
            </SubmitBtn>
          </SubSet>
          {showCard && (
            <CardBase>
              <DisplayCard info={values} />
            </CardBase>
          )}
          {isLoading && (
            <CardBase>
              <Loader />
            </CardBase>
          )}
        </Wrap>
      </form>
    </Layout>
  )
}

export default AddTeacher
