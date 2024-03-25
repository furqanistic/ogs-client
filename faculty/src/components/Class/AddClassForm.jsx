import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { axiosInstance } from '../../config'

const pulseAnimation = keyframes`
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 550px;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
`

const Title = styled.p`
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  &::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  &::after {
    width: 18px;
    height: 18px;
    animation: ${pulseAnimation} 1s linear infinite;
  }
`

const Message = styled.p`
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-transform: capitalize;
`

const SignIn = styled.p`
  text-align: center;
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-transform: capitalize;

  a {
    color: royalblue;

    &:hover {
      text-decoration: underline royalblue;
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
`

const Label = styled.label`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;

  &:focus + span,
  &:valid + span {
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }
`

const Span = styled.span`
  position: absolute;
  left: 10px;
  top: ${({ hasValue }) => (hasValue ? '0px' : '15px')};
  font-size: ${({ hasValue }) => (hasValue ? '0.7em' : '0.9em')};
  font-weight: ${({ hasValue }) => (hasValue ? '600' : 'normal')};
  color: ${({ hasValue }) => (hasValue ? 'green' : 'grey')};
  cursor: text;
  transition: 0.3s ease;
`

const SubmitButton = styled.button`
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transition: transform 0.3s ease;

  &:hover {
    background-color: rgb(56, 90, 194);
    cursor: pointer;
  }
`
const CloseBtn = styled(SubmitButton)`
  background-color: red;
  &:hover {
    background-color: rgb(194, 56, 56);
    cursor: pointer;
  }
`

const Select = styled.select`
  width: 100%;
  min-width: 150px;
  padding: 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
`

const Option = styled.option`
  color: #000;
`

const SelectedSubjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

const SelectedSubject = styled.span`
  background-color: royalblue;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
`

const CrossIcon = styled.span`
  margin-left: 5px;
`

const AddClassForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedTeachers, setSelectedTeachers] = useState([])
  const [TeacherNames, setTeacherNames] = useState([])
  const GradeName = [
    'Class',
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

  const GradeSection = [
    'Section',
    'Dove',
    'Swan',
    'Dolphin',
    'Red',
    'Blue',
    'Green',
    'Orange',
  ]

  const SubjectNames = [
    'Math',
    'Science',
    'History',
    'English',
    'Geography',
    'Art',
    'Music',
  ]

  const handleSelectChange = (event) => {
    const value = event.target.value
    setSelectedOptions([...selectedOptions, value])
  }

  const handleRemoveSubject = (subjectToRemove) => {
    setSelectedOptions(
      selectedOptions.filter((subject) => subject !== subjectToRemove)
    )
  }

  const handleTeacherSelectChange = (event) => {
    const value = event.target.value
    setSelectedTeachers([...selectedTeachers, value])
  }

  const handleRemoveTeacher = (teacherToRemove) => {
    setSelectedTeachers(
      selectedTeachers.filter((teacher) => teacher !== teacherToRemove)
    )
  }

  const { data, status } = useQuery(
    'specific-teacher-option',
    async () => {
      // setIsLoading(true)
      const res = await axiosInstance.get(`/teacher/options`)
      return res.data
    },
    {
      onSuccess: (data) => {
        // Format the teacher names
        const formattedTeachers = data.map(
          (teacher) =>
            `${teacher.fname} ${teacher.lname} - ${teacher.department} - ${teacher.gmail}`
        )
        setTeacherNames(formattedTeachers)
      },
    }
  )

  return (
    <StyledForm>
      <Title>New Class Form</Title>

      <Message>Provide details for new class</Message>
      <FlexContainer>
        <Select required>
          {GradeName.map((grade, index) => (
            <Option key={index} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
        <Select required>
          {GradeSection.map((grade, index) => (
            <Option key={index} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </FlexContainer>
      <Message>Choose Subjects for this class</Message>
      <Select onChange={handleSelectChange} required>
        <Option disabled selected value=''>
          Select Subject (You can select more than one)
        </Option>
        {SubjectNames.filter(
          (subject) => !selectedOptions.includes(subject)
        ).map((subject, index) => (
          <Option key={index} value={subject}>
            {subject}
          </Option>
        ))}
      </Select>
      <SelectedSubjectContainer>
        {selectedOptions.map((subject, index) => (
          <SelectedSubject
            key={index}
            onClick={() => handleRemoveSubject(subject)}
          >
            {subject}
            <CrossIcon>&times;</CrossIcon>
          </SelectedSubject>
        ))}
      </SelectedSubjectContainer>
      <Message>Assign All Teachers for this class</Message>

      <Select onChange={handleTeacherSelectChange} required>
        <Option disabled selected value=''>
          Select Teachers (You can select more than one)
        </Option>
        {TeacherNames.filter(
          (teacher) => !selectedTeachers.includes(teacher)
        ).map((teacher, index) => (
          <Option key={index} value={teacher}>
            {teacher}
          </Option>
        ))}
      </Select>
      <SelectedSubjectContainer>
        {selectedTeachers.map((teacher, index) => (
          <SelectedSubject
            key={index}
            onClick={() => handleRemoveTeacher(teacher)}
          >
            {teacher}
            <CrossIcon>&times;</CrossIcon>
          </SelectedSubject>
        ))}
      </SelectedSubjectContainer>

      <SubmitButton>Save</SubmitButton>

      <CloseBtn
        onClick={() => {
          window.location.reload()
        }}
      >
        Close
      </CloseBtn>

      <SignIn>
        Subject or Teacher not found? Click{' '}
        <Link to='/subjects'>here for Subject</Link> &{' '}
        <Link to='/teachers'>here for Teacher</Link>
      </SignIn>
    </StyledForm>
  )
}

export default AddClassForm
