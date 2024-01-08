import {
  ContactPhone,
  Email,
  LocationCity,
  LocationOn,
  Phone,
  Send,
} from '@mui/icons-material'
import React from 'react'

import styled from 'styled-components'
import ContactImg from '../img/cont.png'

const Container = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 100%;
  height: 22vh;
  object-fit: cover;
  background-color: #024002;
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
const Form = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #012f01;
  display: flex;
  flex: 2;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`
const Left = styled.div`
  flex: 1;
`
const LeftWrapper = styled.div`
  height: 70vh;
  background-color: #008000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23005F00' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23004900'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  display: flex;
`
const Heading = styled.h1`
  font-size: 3rem;
  color: white;
  padding: 1rem;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
`
const DetailsWrapper = styled.div`
  width: 20rem;
  height: 15rem;
  background-color: #013401;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 850px) {
    width: 100%;
  }
`
const DetailItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`
const Info = styled.p`
  color: green;
  font-size: 1.3rem;
  margin-left: 1rem;
  @media (max-width: 850px) {
    font-size: 2rem;
  }
  @media (max-width: 520px) {
    font-size: 1.3rem;
  }
`
const Right = styled.div`
  flex: 1;
  background-color: #012f01;
`
const Contact = styled.div`
  height: 70vh;
  background-color: white;
  margin: 3rem;
  border-radius: 30px;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
`
const Text = styled.p`
  text-align: start;
  font-size: 0.9rem;
`
const Input = styled.input`
  width: 95%;
  padding: 0.5rem;
  border-radius: 10px;
  outline: none;
  border: 1px solid green;
`
const InputMessage = styled.textarea`
  width: 95%;
  padding: 0.5rem;
  border-radius: 10px;
  outline: none;
  border: 1px solid green;
  height: 170px;
  resize: none;
`
const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
`
const Submit = styled.button`
  border: none;
  outline: none;
  background-color: green;
  width: 5rem;
  height: 2.5rem;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`
const ContactPage = () => {
  return (
    <>
      <Container>
        <Image src={ContactImg} />
        <Details>
          <Title>Contact</Title>
          <Desc>ORION GRAMMER SCHOOL</Desc>
        </Details>
      </Container>
      <Container>
        <Form>
          <Left>
            <LeftWrapper>
              <Heading>Love to hear from you, get in touch 👋</Heading>
              <DetailsWrapper>
                <DetailItem>
                  <Phone
                    style={{
                      fontSize: '2rem',
                      color: 'green',
                    }}
                  />
                  <Info>03102987691</Info>
                </DetailItem>
                <DetailItem>
                  <Email
                    style={{
                      fontSize: '2rem',
                      color: 'green',
                    }}
                  />
                  <Info>help@orion.com</Info>
                </DetailItem>
                <DetailItem>
                  <LocationOn
                    style={{
                      fontSize: '2rem',
                      color: 'green',
                    }}
                  />
                  <Info>help@orion.com</Info>
                </DetailItem>
              </DetailsWrapper>
            </LeftWrapper>
          </Left>
          <Right>
            <Contact>
              <Wrapper>
                <Text>Your Name : </Text>
                <Input placeholder='Enter Name Here...' />
              </Wrapper>
              <Wrapper>
                <Text>Mail : </Text>
                <Input placeholder='Enter E-mail Here...' />
              </Wrapper>
              <Wrapper>
                <Text>Number : </Text>
                <Input placeholder='Enter Number Here...' />
              </Wrapper>
              <Wrapper>
                <Text>Message : </Text>
                <InputMessage placeholder='Enter Message Here...' />
              </Wrapper>
              <ButtonWrapper>
                <Submit>
                  <Send />
                </Submit>
              </ButtonWrapper>
            </Contact>
          </Right>
        </Form>
      </Container>
    </>
  )
}

export default ContactPage
