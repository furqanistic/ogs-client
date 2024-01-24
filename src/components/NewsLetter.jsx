import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 2;
  width: 100%;
  min-height: 50vh;
  background-color: #02042f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23323977' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%235F62F5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  color: white;
  padding: 1rem;
  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }
`
const Info = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 740px) {
    width: 100%;
  }
`
const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  @media only screen and (max-width: 1230px) {
    font-size: 2.9rem;
  }
  @media only screen and (max-width: 1180px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 1020px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 910px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 740px) {
    font-size: 2.8rem;
  }
  @media only screen and (max-width: 555px) {
    font-size: 1.8rem;
  }
`
const Left = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 740px) {
    width: 95vw;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
`
const Input = styled.input`
  border: 1px solid white;
  padding: 0.5rem;
  outline: none;
  width: 500px;
  margin: 0.5rem;
  border-radius: 30px;
  color: white;
  background-color: #25265f;
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
  @media only screen and (max-width: 740px) {
    width: 350px;
  }
`
const Button = styled.button`
  border: none;
  padding: 0.3rem;
  outline: none;
  width: 300px;
  border-radius: 30px;
  color: #0b0a45;
  cursor: pointer;
  background-color: white;
  width: 6rem;
  font-size: 1.3rem;
  margin-left: 1.2rem;
  transition: all 0.5s ease-in-out;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: #0b0a45;
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
          <Button>Send</Button>
        </Left>
        <Right>
          <iframe
            title='Orion'
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2191.6232162842043!2d72.72062843019148!3d32.097776442031346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1698706566497!5m2!1sen!2sus'
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
