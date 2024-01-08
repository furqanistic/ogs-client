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
            Unlock your potential with Orion. We're on the lookout for talented
            individuals to be part of our educational journey. Explore our job
            openings and seize the opportunity to make a meaningful impact
            today!
          </Scrolling>
        </ScrollingRedeemLimit>
      </Container>
    </>
  )
}

export default News
