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
`
const Left = styled.div`
  flex: 1;
`
const LeftWrapper = styled.div`
  height: 70vh;
  background-color: green;
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
`
const DetailsWrapper = styled.div`
  width: 20rem;
  height: 15rem;
  background-color: #013401;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
`
const Right = styled.div`
  flex: 1;
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
