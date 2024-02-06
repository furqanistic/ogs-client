import React from 'react'
import styled from 'styled-components'

const End = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9rem;
  font-weight: 300;
  @media (max-width: 570px) {
    font-size: 0.7rem;
  }
  @media (max-width: 420px) {
    font-size: 0.6rem;
  }
  @media (max-width: 350px) {
    font-size: 0.5rem;
  }
`
const Linked = styled.a`
  text-decoration: none;
  color: #05da05;
  margin-left: 5px;
`
const EndCredit = () => {
  return (
    <End>
      {' '}
      Copyrights © All Rights Reserved 2024 - Proudly created by{' '}
      <Linked href='https://www.furqan.cc/'>FURQAN</Linked>
    </End>
  )
}

export default EndCredit
