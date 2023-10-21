import { Email, Phone } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import ContactImg from '../../img/cont.png'
const Container = styled.div`
  display: flex;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 22vh;
  object-fit: cover;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  color: white;

  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 80px;
  font-weight: 600;
`
const Desc = styled.p`
  font-size: 30px;
  font-weight: 400;
`
const ParaHeading = styled.h1`
  font-size: 80px;
  font-weight: 500;
  width: 50vw;
  height: 50vh;
  background-color: white;
  color: #024002;

  writing-mode: vertical-rl;
  display: flex;
  justify-content: center;
  align-items: center;
  -moz-transform: scale(-1, -1);
  -webkit-transform: scale(-1, -1);
  -o-transform: scale(-1, -1);
  -ms-transform: scale(-1, -1);
  transform: scale(-1, -1);
`
const ParaHeadingTwo = styled.h1`
  font-size: 80px;
  font-weight: 500;
  width: 50vw;
  height: 50vh;
  background-color: white;
  color: #024002;

  writing-mode: vertical-rl;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Para = styled.p`
  font-size: 25px;
  height: 50vh;
  width: 50vw;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  padding: 1rem;
  text-align: center;
`

const Info = styled.div`
  display: flex;
  width: 100vw;
  background-color: #024002;

  color: white;
`

const AboutInfo = () => {
  return (
    <>
      <Container>
        <Image src={ContactImg} />
        <Details>
          <Title>About</Title>
          <Desc>ORION GRAMMER SCHOOL</Desc>
        </Details>
      </Container>
      <Info>
        <ParaHeading>Vision</ParaHeading>
        <Para>
          “A vision is your school’s goal — where you hope to see it in the
          future. The mission provides an overview of the steps planned to
          achieve that future. A vision is concise and easy to recall, whereas a
          mission is lengthier and more explanatory in nature.”
        </Para>
      </Info>
      <Info>
        <Para>
          “A vision is your school’s goal — where you hope to see it in the
          future. The mission provides an overview of the steps planned to
          achieve that future. A vision is concise and easy to recall, whereas a
          mission is lengthier and more explanatory in nature.”
        </Para>
        <ParaHeadingTwo>Mission</ParaHeadingTwo>
      </Info>
      <Info>
        <ParaHeading>Why Us?</ParaHeading>
        <Para>
          “The Orion system of education that has been created for students in
          Kindergarten through High School is the best educational system in the
          world. No exceptions. No disclaimers. No doubt. It is simply the best.
          While other countries may offer excellence in one area or offer an
          outstanding education to some students.”
        </Para>
      </Info>
    </>
  )
}

export default AboutInfo
