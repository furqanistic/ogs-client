import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
  position: relative;
  background-color: #030533;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23091C58' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23091C58' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
`

const DivWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
`
const Wrapper = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const JobTitle = styled.p`
  font-size: 1.5rem;
  letter-spacing: 5px;
  @media (max-width: 585px) {
    font-size: 1.2rem;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  margin-left: 2rem;
`
const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  @media (max-width: 585px) {
    font-size: 1.8rem;
  }
`
const RecImg = styled.img`
  width: 150px;
  object-fit: contain;
`
const Button = styled.a`
  color: #ffffff;
  cursor: pointer;
  font-size: 0.7rem;
  text-decoration: underline;
`
const Rectors = () => {
  return (
    <>
      <Container>
        <DivWrapper>
          <Wrapper>
            <RecImg src='https://github.com/furqanistic/ogs-client/blob/main/client/src/img/img.png?raw=true' />

            <Details>
              <JobTitle>Rector</JobTitle>
              <Name>Prof. Waqas Zaheer</Name>
              <Link to='rector-message' style={{ textDecoration: 'none' }}>
                <Button>Read More</Button>
              </Link>
            </Details>
          </Wrapper>
        </DivWrapper>
      </Container>
    </>
  )
}

export default Rectors
