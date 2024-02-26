import React from 'react'
import styled from 'styled-components'
import StudentDataTable from './StudentDataTable'

const Wrap = styled.div`
  margin-bottom: 3rem;
`
const StudentMain = () => {
  return (
    <Wrap>
      <StudentDataTable />
    </Wrap>
  )
}

export default StudentMain
