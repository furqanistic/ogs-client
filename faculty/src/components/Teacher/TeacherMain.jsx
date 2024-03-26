// Import necessary dependencies from MUI
import { Add, Email, LocalPhone, MoreHoriz, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../../Loader/Loader.jsx'
import { axiosInstance } from '../../config.js'

const Wrap = styled.div`
  color: white;
`

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  border-radius: 15px;
  padding: 0.2rem;
`

const SearchBox = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  width: 100%;
`

const Btn = styled.button`
  font-size: 1rem;
  background-color: #3aa933;
  border: none;
  color: #ffffff;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-weight: 400;
  margin-right: 2rem;
  cursor: pointer;
  border-radius: 15px;
`

const CardSection = styled.section`
  padding: 2rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  height: 16rem;
  width: 13rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  margin: 1rem 2rem;
  padding: 0.5rem;
`

const CardName = styled.p`
  font-size: 1.5rem;
  color: #010133;
  font-weight: 700;
  margin: 1rem 0;
  text-transform: capitalize;
`

const CardDep = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #3aa933;
`

const CardImg = styled.img`
  height: 5rem;
  width: 5rem;
  background-color: #3aa933;
  border-radius: 50%;
  object-fit: cover;
`

const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
`

const getCardImgUrl = (gender) => {
  const baseUrlMale =
    'https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg'
  const baseUrlFemale =
    'https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg'

  // Convert gender to lowercase for case-insensitive comparison
  const lowercaseGender = gender.toLowerCase()

  if (lowercaseGender === 'male') {
    return baseUrlMale
  } else if (lowercaseGender === 'female') {
    return baseUrlFemale
  } else {
    // Default URL or handle other cases if needed
    return baseUrlMale
  }
}

const TeacherMain = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // get query for all teachers
  const { data, status } = useQuery('all-teachers', async () => {
    const res = await axiosInstance.get(`/teacher`)
    return res.data
  })

  if (status === 'loading') {
    return (
      <LoaderWrap>
        <Loader msg='Loading Teachers Data...' />
      </LoaderWrap>
    )
  }

  const filteredTeachers = data.filter(
    (teacher) =>
      teacher.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <Wrap>
      <Bar>
        <BarWrap>
          <Search style={{ margin: '0.3rem' }} />
          <SearchBox
            placeholder='Search Name/Department...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </BarWrap>
        <Link to='/teachers/add' style={{ textDecoration: 'none' }}>
          <Btn>
            <Add />
            Add Teacher
          </Btn>
        </Link>
      </Bar>
      <CardSection>
        {filteredTeachers.map((teacher, index) => (
          <Card key={index}>
            <CardImg
              src={getCardImgUrl(teacher.gender)}
              alt={`${teacher.fname} ${teacher.lname}`}
            />
            <CardName>{`${teacher.fname} ${teacher.lname}`}</CardName>
            <CardDep>{teacher.department}</CardDep>
            <CardInfo title={`${teacher.cell}`}>
              <LocalPhone
                style={{
                  backgroundColor: '#3aa933',
                  borderRadius: '50%',
                  padding: '0.3rem',
                  fontSize: '1.7rem',
                  marginRight: '0.5rem',
                  cursor: 'pointer',
                }}
                onClick={() => handleCall(teacher.cell)}
              />
              <Email
                style={{
                  backgroundColor: '#3aa933',
                  borderRadius: '50%',
                  padding: '0.3rem',
                  fontSize: '1.7rem',
                  marginRight: '0.5rem',
                  cursor: 'pointer',
                }}
                onClick={() => handleEmail(teacher.gmail)}
              />
              <Link to={`view/${teacher._id}`} style={{ color: 'white' }}>
                <MoreHoriz
                  style={{
                    backgroundColor: '#3aa933',
                    borderRadius: '50%',
                    padding: '0.3rem',
                    fontSize: '1.7rem',
                    cursor: 'pointer',
                  }}
                />
              </Link>
            </CardInfo>
          </Card>
        ))}
      </CardSection>
    </Wrap>
  )
}

export default TeacherMain
