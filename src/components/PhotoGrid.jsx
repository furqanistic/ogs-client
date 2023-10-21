import React from 'react'
import styled from 'styled-components'
import ContactImg from '../img/cont.png'

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
const PhotoGrid = () => {
  return (
    <>
      <Container>
        <Image src={ContactImg} />
        <Details>
          <Title>Gallery</Title>
          <Desc>ORION GRAMMER SCHOOL</Desc>
        </Details>
      </Container>
    </>
  )
}

export default PhotoGrid
