import React from 'react'
import styled from 'styled-components'
import RectorBg from '../img/libra.png'
import RectorOne from '../img/rec1.jpg'
import RectorTwo from '../img/rec2.jpg'
const Container = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  position: relative;
`
const Image = styled.img`
  height: 40vh;
  width: 100%;
  object-fit: cover;
`
const DivWrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 2;
  height: 100%;
  width: 100%;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
`
const JobTitle = styled.p`
  font-size: 1rem;
  letter-spacing: 5px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`
const Name = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`
const RecImg = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 20px;
`
const Button = styled.button`
  border: none;
  transition: all 0.5s ease-in-out;

  outline: none;
  margin-top: 1rem;
  color: green;
  cursor: pointer;
  width: 6rem;
  height: 2.2rem;

  &:hover {
    color: white;
    background-color: green;
  }
`
const Rectors = () => {
  return (
    <>
      <Container>
        <Image src={RectorBg} />
        <DivWrapper>
          <Left>
            <Wrapper>
              <RecImg src={RectorTwo} />
              <Details>
                <JobTitle>Rector</JobTitle>
                <Name>Prof. Waqas Zaheer</Name>
                <Button>Read More</Button>
              </Details>
            </Wrapper>
          </Left>
          <Right>
            <Wrapper>
              <RecImg src={RectorOne} />
              <Details>
                <JobTitle>Principal</JobTitle>
                <Name>Prof. Zaheer Waqas</Name>
                <Button>Read More</Button>
              </Details>
            </Wrapper>
          </Right>
        </DivWrapper>
      </Container>
    </>
  )
}

export default Rectors
