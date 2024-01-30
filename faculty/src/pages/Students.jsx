import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Topbar from '../components/Layout/Topbar'
import StudentMain from '../components/Students/StudentMain'

const Size = styled.div`
  padding-left: 3rem;
  position: relative;
`
const Students = () => {
  return (
    <Layout>
      <Size>
        <Topbar title='Student' />

        <StudentMain />
      </Size>
    </Layout>
  )
}

export default Students
