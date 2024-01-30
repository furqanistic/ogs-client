import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Topbar from '../components/Layout/Topbar'

const Size = styled.div`
  padding-left: 3rem;
  position: relative;
`
const User = () => {
  return (
    <Layout>
      <Size>
        <Topbar title='User' />
      </Size>
    </Layout>
  )
}

export default User