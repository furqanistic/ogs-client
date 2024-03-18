import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import DashCalander from '../components/Dashboard/DashCalander'
import DashInfoBar from '../components/Dashboard/DashInfoBar'
import DashSchoolPerfomance from '../components/Dashboard/DashSchoolPerfomance'

const Size = styled.div`
  padding-left: 3rem;
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #0b0a45;
  /* background-color: #0b0a45; */
`

const Dashboard = () => {
  return (
    <Layout>
      <Size>
        <DashInfoBar />
        <DashSchoolPerfomance />
        {/* <DashCalander /> */}
      </Size>
    </Layout>
  )
}

export default Dashboard
