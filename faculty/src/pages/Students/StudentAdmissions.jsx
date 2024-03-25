import React from 'react'
import styled from 'styled-components'
import Layout from '../../Layout'
import Topbar from '../../components/Layout/Topbar'
import StudentMain from '../../components/Students/StudentMain'

const StudentAdmissions = () => {
  return (
    <Layout>
      <Topbar title='Students' />
      <StudentMain />
    </Layout>
  )
}

export default StudentAdmissions
