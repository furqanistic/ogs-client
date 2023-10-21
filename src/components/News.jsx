import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: white;
`
const ScrollingRedeemLimit = styled.div`
  height: 2rem;
  background-color: white;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-weight: 300;
`
const scroll = keyframes`
 0%   {left: 500px;}
    100% {left: -950px;}
`
const Scrolling = styled.div`
  position: relative;
  -webkit-animation: ${scroll} 20s infinite linear;
  -moz-animation: ${scroll} 20s infinite linear;
  -o-animation: ${scroll} 20s infinite linear;
  animation: ${scroll} 20s infinite linear;
`
const News = () => {
  return (
    <>
      <Container>
        <ScrollingRedeemLimit>
          <Scrolling>
            A school is an educational institution designed to provide learning
            spaces and learning environments for the teaching of students under
            the direction of teachers.
          </Scrolling>
        </ScrollingRedeemLimit>
      </Container>
    </>
  )
}

export default News
