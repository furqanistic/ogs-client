import { PhoneInTalk } from '@mui/icons-material'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import School from '../img/front.jpg'
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 510px) {
    height: 40vh;
  }
  @media only screen and (max-width: 410px) {
    height: 30vh;
  }
`
const Image = styled.div`
  height: 60vh;
  width: 100%;
  object-fit: cover;
  background-color: #0b0a45;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%231d2acc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%232c23aa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%230062f2' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%230051ca' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23007ee4' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230068bd' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%230091b1' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23007691' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%2300a070' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23008158' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2316aa34' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%230f8822' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  background-position: center;

  @media only screen and (max-width: 510px) {
    height: 40vh;
  }
  @media only screen and (max-width: 410px) {
    height: 30vh;
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  padding: 1rem;
  text-align: center;
`
const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;

  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 510px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 410px) {
    font-size: 1.5rem;
  }
`
const vibrateAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-5px); }
  40% { transform: translateY(5px); }
  60% { transform: translateY(-3px); }
  80% { transform: translateY(3px); }
  100% { transform: translateY(0); }
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  padding: 0.7rem;
  text-transform: uppercase;
  margin: 20px;
  border: 0;
  z-index: 1;
  font-weight: 500;
  color: #04076d;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;
  animation: ${vibrateAnimation} 3s ease infinite, static 5s 1; /* Apply the animation here */

  @media only screen and (max-width: 510px) {
    font-size: 14px;
  }
`
const Slogan = styled.p`
  font-size: 2rem;
  color: white;
  font-weight: 300;
  @media only screen and (max-width: 780px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 510px) {
    font-size: 1rem;
  }
`
const Imp = styled.div`
  height: 3rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #25265f;
  font-weight: 600;
`
const CallLink = styled.a`
  text-decoration: none;
`
const ContactData = () => {
  return (
    <>
      <Imp>Get in Touch 🤙</Imp>
      <Container>
        <Image></Image>
        <Information>
          <Title>The Orion School</Title>
          <CallLink href='tel:+923077879988'>
            <Button>
              Click here to speak with us{' '}
              <PhoneInTalk style={{ marginLeft: '8px' }} />
            </Button>
          </CallLink>
          <Slogan>Making you proud is our vision!</Slogan>
        </Information>
      </Container>
    </>
  )
}

export default ContactData
