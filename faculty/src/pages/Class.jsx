import React from 'react'
import Layout from '../Layout'
import ClassBar from '../components/Class/ClassBar'
import MainSection from '../components/Class/MainSection'
import Topbar from '../components/Layout/Topbar'

const Class = () => {
  return (
    <Layout>
      <Topbar title='Class' />
      <MainSection />
    </Layout>
  )
}

export default Class
