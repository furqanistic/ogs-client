import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Topbar from '../components/Layout/Topbar'

const Size = styled.div`
  padding-left: 3rem;
  position: relative;
`
const Event = () => {
  return (
    <Layout>
      <Size>
        <Topbar title='Event' />
      </Size>
    </Layout>
  )
}

export default Event
