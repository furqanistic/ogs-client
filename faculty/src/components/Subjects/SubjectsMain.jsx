import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import AddSubjectForm from './AddSubjectForm'
import SubjectsBar from './SubjectsBar'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
`
const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 250px;
  flex-direction: column;
  min-height: 200px;
  margin: 2rem;
  background-color: #040290;
  border-radius: 40px;
`
const BoxLabel = styled.div`
  background-color: #ffffff;
  color: black;
  width: 100%;
  text-align: center;
  line-height: 3.5rem;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: capitalize;
  border-end-start-radius: 5px;
  border-bottom-right-radius: 40px;
`
const BoxText = styled.p`
  font-size: 7rem;
  color: #ffffff;
  font-weight: 600;
  opacity: 0.8;
`

const CoverPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Change to fixed to cover entire viewport */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.696);
  z-index: 999; /* Ensure it's above other content */
`

const BarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  padding: 0.2rem;
  border-radius: 15px;
`

const SearchBox = styled.input`
  font-size: 0.9rem;
  border: none;
  outline: none;
  width: 100%;
`
const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;
`
const SubjectsMain = () => {
  const [showForm, setShowForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleButtonClick = () => {
    setShowForm(!showForm)
  }

  const filteredSubjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'English Language Arts' },
    { id: 3, name: 'Science' },
    { id: 4, name: 'Social Studies' },
    { id: 5, name: 'Physical Education' },
    { id: 6, name: 'Health' },
    { id: 7, name: 'Art' },
    { id: 8, name: 'Music' },
    { id: 9, name: 'Computer Science' },
    { id: 10, name: 'History' },
  ].filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <SubjectsBar onButtonClick={handleButtonClick} />
      {showForm && (
        <CoverPage>
          <AddSubjectForm />
        </CoverPage>
      )}
      <Bar>
        <BarWrap>
          <Search style={{ margin: '0.3rem' }} />
          <SearchBox
            placeholder='Search Subjects Here...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </BarWrap>
      </Bar>
      <Wrap>
        {filteredSubjects.map((subject) => (
          <Box key={subject.id}>
            <BoxText>{subject.name.charAt(0)}</BoxText>
            <BoxLabel>{subject.name}</BoxLabel>
          </Box>
        ))}
      </Wrap>
    </>
  )
}

export default SubjectsMain
