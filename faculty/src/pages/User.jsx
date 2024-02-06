import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Topbar from '../components/Layout/Topbar'

const Size = styled.div`
  padding-left: 3rem;
  position: relative;
`
const Notice = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`
const User = () => {
  return (
    <Layout>
      <Size>
        <Topbar title='User' />
        <Wrap>
          <Notice>You are not allowed to access this page 😓</Notice>
        </Wrap>
      </Size>
    </Layout>
  )
}

export default User
