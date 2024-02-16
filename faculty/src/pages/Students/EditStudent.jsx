import { Error } from '@mui/icons-material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
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
  padding: 1.5rem 0;
  width: 98%;
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
  background: green;
  color: #ffffff;
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
const EditStudent = () => {
  // all the states here
  const [showCard, setShowCard] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [prevSchool, setPrevSchool] = useState('')
  const [dob, setDob] = useState('')
  const [grade, setGrade] = useState('')
  const [fname, setFname] = useState('')
  const [fcnic, setFcninc] = useState('')
  const [femail, setFemail] = useState('')
  const [fcell, setFcell] = useState('')
  const [foccupation, setFoccupation] = useState('')
  const [mname, setMname] = useState('')
  const [moccupation, setMoccupation] = useState('')
  const [mcell, setMcell] = useState('')
  const [address, setAddress] = useState('')
  const [others, setOthers] = useState('')
  const [showstatus, setShowStatus] = useState('')

  const params = useParams()
  const navigate = useNavigate()
  // all funcs

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      // If the date is not valid, return an empty string or handle it accordingly
      return ''
    }
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${year}-${month}-${day}`
  }

  const GradeOptions = [
    'Choose',
    'PG',
    'Nursery',
    'KG',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
  ]
  const statusOptions = ['Waiting', 'Enrolled']

  const { data, status } = useQuery(
    'edit-admission',
    async () => {
      // setIsLoading(true)
      const res = await axiosInstance.get(`/admission/${params.id}`)
      return res.data
    },
    {
      onSuccess: (data) => {
        setName(data.name || '')
        setPrevSchool(data.prevSchool || '')
        setDob(formatDate(data.dob) || '')
        setGrade(data.grade || '')
        setFname(data.fname || '')
        setFcninc(data.fcnic || '')
        setFemail(data.femail || '')
        setFcell(data.fcell || '')
        setFoccupation(data.foccupation || '')
        setMname(data.mname || '')
        setMoccupation(data.moccupation || '')
        setMoccupation(data.moccupation || '')
        setMcell(data.mcell || '')
        setAddress(data.address || '')
        setOthers(data.fname || '')
        setShowStatus(data.status || '')
        setIsLoading(false)
      },
    }
  )
  // all the functions here

  const handleStudent = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axiosInstance.put(`admission/${params.id}`, {
        name,
        prevSchool,
        dob,
        grade,
        fname,
        fcnic,
        fcell,
        femail,
        foccupation,
        mname,
        moccupation,
        mcell,
        address,
        others,
        status: showstatus,
      })
      setShowCard(true)
      navigate(`/students/all-admissions/view/${params.id}`)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <Topbar title='Student' />
      <form>
        <Wrap id='booking-form-wrap'>
          <FieldsHeading>View Student Information : </FieldsHeading>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Student's Name: </FormText>
                <FormInput
                  placeholder='Enter First Name...'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Previous School:: </FormText>
                <FormInput
                  placeholder='Enter Previous School...'
                  type='text'
                  value={prevSchool}
                  onChange={(e) => setPrevSchool(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputSetTwo>
            <FormText>Class: </FormText>
            <SelectCat
              name='grade'
              onChange={(e) => setGrade(e.target.value)}
              value={grade}
            >
              {GradeOptions.map((category) => (
                <SelectOpt key={category} value={category}>
                  {category}
                </SelectOpt>
              ))}
            </SelectCat>
          </InputSetTwo>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>DOB: </FormText>
                <FormInput
                  type='date'
                  value={formatDate(dob)}
                  onChange={(e) => setDob(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Name: </FormText>
                <FormInput
                  placeholder='Enter Father Name...'
                  type='text'
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's CNIC: </FormText>
                <FormInput
                  placeholder='Enter CNIC ...'
                  type='text'
                  value={fcnic}
                  onChange={(e) => setFcninc(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Cell#: </FormText>
                <FormInput
                  placeholder='Enter Cell#...'
                  type='text'
                  value={fcell}
                  onChange={(e) => setFcell(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Email: </FormText>
                <FormInput
                  placeholder='Enter Fathers Email...'
                  type='text'
                  value={femail}
                  onChange={(e) => setFemail(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Occupation: </FormText>
                <FormInput
                  placeholder='Enter Fathers occupation...'
                  type='text'
                  value={foccupation}
                  onChange={(e) => setFoccupation(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Mother's Name: </FormText>
                <FormInput
                  placeholder='Enter Mothers Name...'
                  type='text'
                  value={mname}
                  onChange={(e) => setMname(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Mother's Occupation: </FormText>
                <FormInput
                  placeholder='Enter Occupation...'
                  type='text'
                  value={moccupation}
                  onChange={(e) => setMoccupation(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Mother's Cell#: </FormText>
                <FormInput
                  placeholder='Enter Cell#..'
                  type='text'
                  value={mcell}
                  onChange={(e) => setMcell(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Address: </FormText>
                <FormInput
                  placeholder='Enter Address...'
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>

          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Other Information / Notes :</FormText>
                <FormInput
                  placeholder='Other info...'
                  type='text'
                  value={others}
                  onChange={(e) => setOthers(e.target.value)}
                />
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputSetTwo>
            <FormText>Status: </FormText>
            <SelectCat
              name='showstatus'
              onChange={(e) => setShowStatus(e.target.value)}
              value={showstatus}
            >
              {statusOptions.map((category) => (
                <SelectOpt key={category} value={category}>
                  {category}
                </SelectOpt>
              ))}
            </SelectCat>
          </InputSetTwo>
          <SubSet>
            <SubmitBtn>
              <span onClick={handleStudent}>Update</span>
            </SubmitBtn>
          </SubSet>

          {isLoading && (
            <CardBase>
              <Loader msg='Loading Student Profile Card...' />
            </CardBase>
          )}
        </Wrap>
      </form>
    </Layout>
  )
}

export default EditStudent
