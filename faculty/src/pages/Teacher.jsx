import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Topbar from '../components/Layout/Topbar'
import TeacherMain from '../components/Teacher/TeacherMain'

const Size = styled.div`
  position: relative;
  min-width: 1200px;
`
const Teacher = () => {
  return (
    <Layout>
      <Size>
        <Topbar title='Teachers' />
        <TeacherMain />
      </Size>
    </Layout>
  )
}

export default Teacher
