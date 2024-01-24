import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  min-height: 300px;
  background-color: #02042f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23323977' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%235F62F5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`
const Card = styled.div`
  width: 190px;
  height: 120px;
  padding: 0.5rem;
  background-color: #161888;

  border-radius: 8px;
  backdrop-filter: blur(5px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.44);
  border-left: 2px rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
  transform: skewX(10deg);
  transition: 0.4s;
  overflow: hidden;
  color: white;
  &:hover {
    height: 254px;
    transform: skew(0deg);
  }
  @media only screen and (max-width: 480px) {
    width: 130px;
    height: 80px;
  }
`
const Align = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
`
const Red = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff605c;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
`
const Yellow = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffbd44;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
`
const Green = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00ca4e;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
`
const Title = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  margin: 1.3rem;
  color: rgb(251, 251, 251);
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    margin: 0rem;
  }
`
const Info = styled.p`
  font-size: 0.8rem;
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 5px;
  }
`

const Imp = styled.div`
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #25265f;
  font-weight: 600;
`
const Offer = () => {
  return (
    <>
      <Imp>Our Power Cards ⬇️</Imp>
      <Container>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Teachers</Title>
            <Info>
              A teacher, also called a schoolteacher or formally an educator, is
              a person who helps students to acquire knowledge, competence.
            </Info>
          </Card>
        </Item>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Education</Title>
            <Info>
              Education refers to the discipline that is concerned with methods
              of teaching and learning in schools or school-like environments
            </Info>
          </Card>
        </Item>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Library</Title>
            <Info>
              Academic libraries serve colleges and universities. Public
              libraries serve cities and towns of all types.
            </Info>
          </Card>
        </Item>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Why Us?</Title>
            <Info>
              Most of our clients have been with us for many years because we
              deliver such outstanding results, we're trustworthy.
            </Info>
          </Card>
        </Item>
      </Container>
    </>
  )
}

export default Offer
