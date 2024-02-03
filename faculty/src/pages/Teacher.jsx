import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Topbar from '../components/Layout/Topbar'
import TeacherMain from '../components/Teacher/TeacherMain'

const Size = styled.div`
  padding-left: 3rem;
  position: relative;
`
const Teacher = () => {
  return (
    <Layout>
      <Size>
        <Topbar title='Teacher' />
        <TeacherMain />
      </Size>
    </Layout>
  )
}

export default Teacher
