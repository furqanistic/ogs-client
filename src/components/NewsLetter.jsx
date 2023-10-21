import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 2;
  width: 100%;
  height: 50vh;
  background-color: #024002;
  color: white;
`
const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
`
const Left = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
`
const Input = styled.input`
  border: none;
  padding: 0.5rem;
  outline: none;
  width: 300px;
  margin: 0.5rem;
  border-radius: 30px;
  color: white;
  background-color: #0db10d8b;
  ::placeholder {
    color: white;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: white;
  }

  ::-ms-input-placeholder {
    color: white;
  }
`
const Button = styled.button`
  border: none;
  padding: 0.5rem;
  outline: none;
  width: 300px;

  border-radius: 30px;
  color: green;
  cursor: pointer;
  width: 5rem;
  height: 2.2rem;
  margin-left: 1.5rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: white;
    background-color: green;
    border: 1px solid white;
  }
`
const NewsLetter = () => {
  return (
    <>
      <Container>
        <Left>
          <Info>
            <Title>Stay Connected here!</Title>
            <Input placeholder='Your Name...' />
            <Input placeholder='Your Email...' />
            <Input placeholder='Your Phone...' />
            <Input placeholder='City...' />
          </Info>
          <Button>Submit</Button>
        </Left>
        <Right>
          <iframe
            title='Orion'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.493306374203!2d72.69244561519389!3d32.08295072635602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177c4579533a5%3A0x86efa9c89636b1f6!2sRISE%20Academy%20Sargodha!5e0!3m2!1sen!2s!4v1671393565780!5m2!1sen!2s'
            width='100%'
            height='99%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Right>
      </Container>
    </>
  )
}

export default NewsLetter
