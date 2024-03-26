import React from 'react'
import Layout from '../Layout'
import Topbar from '../components/Layout/Topbar'
import SubjectsMain from '../components/Subjects/SubjectsMain'
const Subjects = () => {
  return (
    <Layout>
      <Topbar title='Subjects' />
      <SubjectsMain />
    </Layout>
  )
}

export default Subjects
