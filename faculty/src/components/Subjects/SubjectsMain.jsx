import { Face4, LocalLibrary, Search } from '@mui/icons-material'
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
  text-align: center;
  min-width: 250px;
  flex-direction: column;
  min-height: 200px;
  margin: 2rem;
  background-color: #040290;
  border-radius: 40px;
  border-end-start-radius: 15px;
`
const BoxLabel = styled.div`
  background-color: #ffffff;
  color: black;
  width: 100%;
  text-align: center;
  line-height: 3.5rem;
  font-size: 1rem;
  font-weight: 300;
  text-transform: capitalize;
  border-bottom-right-radius: 30px;
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
const Boxed = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #1edb2b;
  border-bottom-right-radius: 40px;
  border-end-start-radius: 15px;
  border: 1px dotted #1e37db;
`

const BoxedWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-right: 10px; */
  min-width: 80px;
  /* padding: 0 1rem; */
  height: 100%;
  align-items: start;
  padding-left: 10px;
  justify-content: center;
  font-weight: 300;
`
const BoxStudents = styled.span`
  font-size: 1rem;
  align-items: start;
`
const BoxTeachers = styled.span`
  font-size: 1rem;
  align-items: start;
`
const Big = styled.strong`
  font-weight: 800;
`
const SubjectsMain = () => {
  const [showForm, setShowForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleButtonClick = () => {
    setShowForm(!showForm)
  }

  const filteredSubjects = [
    { id: 1, name: 'Mathematics', numofTeachers: 2, numOfStudents: 28 },
    {
      id: 2,
      name: 'English Language Arts',
      numofTeachers: 2,
      numOfStudents: 80,
    },
    { id: 3, name: 'Science' },
    { id: 4, name: 'Social Studies', numofTeachers: 2, numOfStudents: 80 },
    { id: 5, name: 'Physical Education', numofTeachers: 2, numOfStudents: 84 },
    { id: 6, name: 'Health', numofTeachers: 2, numOfStudents: 46 },
    { id: 7, name: 'Art', numofTeachers: 2, numOfStudents: 91 },
    { id: 8, name: 'Music', numofTeachers: 2, numOfStudents: 55 },
    { id: 9, name: 'Computer Science', numofTeachers: 2, numOfStudents: 71 },
  ].filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <SubjectsBar
        onButtonClick={handleButtonClick}
        len={filteredSubjects.length}
      />
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
            <Boxed>
              <BoxedWrap>
                <BoxStudents>
                  <Big>S :</Big> {subject.numOfStudents}
                </BoxStudents>
                <BoxTeachers>
                  <Big>T :</Big> {subject.numofTeachers}
                </BoxTeachers>
              </BoxedWrap>
              <BoxLabel>{subject.name}</BoxLabel>
            </Boxed>
          </Box>
        ))}
      </Wrap>
    </>
  )
}

export default SubjectsMain
