import {
  Delete,
  Edit,
  KeyboardBackspace,
  Visibility,
} from '@mui/icons-material'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../../Layout'
import Loader from '../../Loader/Loader'
import Topbar from '../../components/Layout/Topbar'
import { axiosInstance } from '../../config.js'
const Wrap = styled.div`
  max-width: 1200px;
  background-color: #ffffff;
  color: #000000;
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

const FormContent = styled.p`
  width: 100%;
  border: 1px solid #000000;
  padding: 10px 0;
  font-size: 16px;
  min-height: 36px;
  color: #000000;
  outline: none;
  font-weight: 300;
  background: transparent;
  padding: 0.5rem;
  border-radius: 10px;
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

const FieldsHeading = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  color: #000000;
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
  flex-wrap: wrap;
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
  justify-content: center;
  align-items: center;
  display: flex;
  letter-spacing: 0.05rem;
  font-weight: 400;
  font-size: 17px;
  border-radius: 300px;
  color: white;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 150px;
  &.green {
    background-color: green;
  }
  &.blue {
    background-color: blue;
  }
  &.red {
    background-color: red;
  }
`
const CardBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 7, 35, 0.829); /* Adjust the opacity as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure it's above other content */
`

const ViewStudent = () => {
  // all the states here
  const params = useParams()
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
  const navigate = useNavigate()

  const goBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }
  // get request data
  const { data, status } = useQuery(
    'specific-teacher',
    async () => {
      const res = await axiosInstance.get(`/admission/${params.id}`)
      return res.data
    },
    {
      onSuccess: (data) => {
        setName(data.name || '')
        setPrevSchool(data.prevSchool || '')
        setDob(data.dob || '')
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
        setIsLoading(false)
      },
    }
  )

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.delete(`/admission/${params.id}`)
      navigate('/students/all-admissions')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <Topbar title='Teachers' />
      <form>
        <Wrap id='booking-form-wrap'>
          <FieldsHeading>View Student Information : </FieldsHeading>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Student's Name: </FormText>
                <FormContent>{name}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Previous School:: </FormText>
                <FormContent>{prevSchool}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Class: </FormText>
                <FormContent>{grade}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>DOB: </FormText>
                <FormContent>{formatDate(dob)}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Name: </FormText>
                <FormContent>{fname}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's CNIC: </FormText>
                <FormContent>{fcnic}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Cell#: </FormText>
                <FormContent>{fcell}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Email: </FormText>
                <FormContent>{femail}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Father's Occupation: </FormText>
                <FormContent>{foccupation}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Mother's Name: </FormText>
                <FormContent>{mname}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Mother's Occupation: </FormText>
                <FormContent>{moccupation}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Mother's Cell#: </FormText>
                <FormContent>{mcell}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Address: </FormText>
                <FormContent>{address}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>

          <InputWrap>
            <ErrorWrap>
              <InputSet>
                <FormText>Other Information / Notes :</FormText>
                <FormContent>{others}</FormContent>
              </InputSet>
            </ErrorWrap>
          </InputWrap>
          <SubSet>
            <SubmitBtn className='green' onClick={goBack}>
              <KeyboardBackspace style={{ marginRight: '5px' }} />
              Back
            </SubmitBtn>
            <Link to={`/teachers/edit/${params.id}`}>
              <SubmitBtn className='blue'>
                <Edit style={{ marginRight: '5px' }} />
                Edit
              </SubmitBtn>
            </Link>
            <SubmitBtn className='red' onClick={handleDelete}>
              <Delete style={{ marginRight: '5px' }} />
              Delete
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

export default ViewStudent
