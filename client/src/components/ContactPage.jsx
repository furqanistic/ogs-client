import {
  ContactPhone,
  Email,
  LocationCity,
  LocationOn,
  Phone,
  Send,
  WhatsApp,
} from '@mui/icons-material'
import React from 'react'

import styled from 'styled-components'
import ContactImg from '../img/cont.png'

const Container = styled.div`
  display: flex;
`
const Image = styled.div`
  width: 100%;
  height: 22vh;
  object-fit: cover;
  background-color: #0b2255;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'%3E%3Cg %3E%3Cpath fill='%230C550C' d='M306.9 210.2c-1.2-22.8-13.5-42.7-40.8-41.1c-18.3 1.1-35.9 3.6-47.5 20.1c-5.2 7.4-10.6 15.6-11.4 24.9c-0.5 5.8 0.2 12 1.2 17.7c9 49.6 85.3 46.7 96.4 0.2C306.6 224.9 307.3 217.4 306.9 210.2z'/%3E%3Cpath fill='%230d6016' d='M137.2 481.3c-13.2-9.9-31.2-13.3-48.5-3.2c-12.6 7.3-19.1 17.4-21.1 28.2c-0.7 2.4-1.2 4.7-1.5 7c-8.2 35.4 33.7 78.9 72.6 48.6C167.6 539.3 164.4 501.6 137.2 481.3z'/%3E%3Cg fill='%230d6b22' %3E%3Cpath d='M547.9 588.3c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 619.7 553.9 604.2 547.9 588.3z'/%3E%3Cpath d='M547.9-11.7c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 19.7 553.9 4.2 547.9-11.7z'/%3E%3C/g%3E%3Cpath fill='%230d7630' d='M849.7 498c-22.3 1.3-43.2 7.5-52.7 29.5c-3.3 7.7-7.3 15.7-7 24.3c2 55.6 86.1 63.4 98.8 10.1C890.6 554.6 877.3 496.4 849.7 498z'/%3E%3Cpath fill='%230d8140' d='M762 291.1c-8.2-6.1-19.1-1.9-27.3 2.2c-7.4 3.7-14.4 8.2-21.6 12.1c-6.6 3.6-13.7 7-19.8 11.5c-18.3 13.5-2.5 45.1 10.6 56.4c17 14.6 41.6 15.9 59.6 2.1C794.1 351.8 790.7 312.4 762 291.1z'/%3E%3Cpath fill='%230d8d53' d='M863.3 170.3c-4.5-15.7-17.9-28.8-33.4-34.4c-16.2-5.8-38.4-2.9-51.8 8.1c-14.9 12.2-14.5 31.7-11.4 49c9.6 53.9 84.3 47.7 97-1.3C865.6 184.4 865.3 177.1 863.3 170.3z'/%3E%3Cpath fill='%230d9869' d='M598.4 86.1c-10.2 15.5-9.3 34.2-0.9 50.4c2.6 5 6.2 9.5 10.4 13.2c14.2 12.6 35.5 17.1 53.2 9.5c14.3-6.1 23.9-19.8 26.7-34.7C707.4 75.6 629.7 38.5 598.4 86.1z'/%3E%3Cpath fill='%230da481' d='M509.8 413.3c-17.3 22.6-11.8 59 17.5 75.3c22.6 12.6 52.2 1.7 63.8-20.9c21.4-42-9.2-85-56.5-71C523.8 399.9 515.6 405.8 509.8 413.3z'/%3E%3Cpath fill='%230cb09c' d='M607.4 232.3c-0.5-0.4-1-0.8-1.4-1.2c-16.5-12.8-30.2-22.1-50.3-8.4c-15.5 10.6-29 30.3-31.4 49.1c-4.2 33.6 30.6 46.9 58.6 40.6C619.6 304.2 640.6 259.5 607.4 232.3z'/%3E%3Cpath fill='%230cbcbb' d='M410.6 95c-36.5 1.3-74.1 41.8-43.1 74.3c19.8 20.9 54.4 20.7 74.6 0.5c20.5-20.4 18.4-53.1-6.9-68.6C427.7 96.6 419.2 94.7 410.6 95z'/%3E%3Cpath fill='%230bb5c8' d='M291.3 23c-0.1-0.1-0.1-0.1-0.2-0.2c-14.2-16.9-38.3-25.6-61.4-12.3c-13.5 7.8-20.5 18.7-22.7 30.2c-5.7 18 1.5 34.2 14.2 44.8c15.4 16.8 40.3 24.1 64.2 5.5c9.6-7.4 15-16.3 17.2-25.4C308.6 48.8 302.7 33.6 291.3 23z'/%3E%3Cpath fill='%230aaad5' d='M419.1 440.6c-16.9-14.5-41.8-21.5-61.7-9.5c-18.3 11.1-1 100.1 32.2 93.5c23.8-4.7 45.3-22.4 48.1-44.3C439.6 466.1 431.5 451.3 419.1 440.6z'/%3E%3Cpath fill='%23099ce1' d='M127 227c-12-4.3-25.4-2.1-38.7 11.4C71 255.9 61.4 286.1 80.4 306c21.3 22.3 86.9 27.5 89.6-14.9c0.5-8.9-2.7-17.9-6.5-25.8C155.1 248.3 142.1 232.5 127 227z'/%3E%3Cpath fill='%23078aee' d='M281.5 407.6c-0.3-0.4-0.7-0.7-1-1c-19.3-17.6-59.1-0.6-78.1 10.3c-23.8 13.7-8.2 41.1 5.4 55.8c16.3 17.6 42.7 25.2 68 5.8C291.3 466.6 295.5 422.7 281.5 407.6z'/%3E%3Cpath fill='%230776f9' d='M137.9 110.2c-10.4-25.7-43.3-32.1-67-23.6C60.1 90.4 50 97.8 45.1 108.6c-21.2 47.3 44.9 81.1 78.5 51c9.5-8.5 17.3-18.9 17.4-32.4C141 120.8 139.9 115.1 137.9 110.2z'/%3E%3Cpath fill='%231162fb' d='M344.3 284.7c-10 14.9-9.2 34.1-0.9 49.5c3.4 6.3 8.6 13.8 16.1 15.8c7.1 1.9 15.1 0.7 22.1-0.6c15.7-3 45.6-10.5 52.3-26.8C453.5 274.4 375.6 237.9 344.3 284.7z'/%3E%3Cg fill='%231a50fd' %3E%3Cpath d='M-29.2 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C-41.1 373.2-55 418.1-29.2 431.8z'/%3E%3Cpath d='M870.8 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C858.9 373.2 845 418.1 870.8 431.8z'/%3E%3C/g%3E%3Cpath fill='%232440FF' d='M671.4 460.5c-10.7 1.7-20.2 8.3-26.2 22.2c-21.5 49.5 45.4 84.9 79.4 53.3c16.3-15.2 24-31 6.5-48.1c-5.9-5.8-12.3-11-19.1-15.6C699.5 463.7 684.5 458.4 671.4 460.5z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  @media (max-width: 768px) {
    height: 14vh;
  }
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
  @media (max-width: 768px) {
    font-size: 50px;
  }
`
const Desc = styled.p`
  font-size: 30px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const Form = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #16078e;
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
  background-color: #02042f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23323977' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%235F62F5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: #4332c5;
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
const Info = styled.a`
  color: #ffffff;
  font-size: 1.3rem;
  margin-left: 1rem;
  text-decoration: none;
  @media (max-width: 850px) {
    font-size: 2rem;
  }
  @media (max-width: 520px) {
    font-size: 1.3rem;
  }
`
const Right = styled.div`
  flex: 1;
  background-color: #16078e;
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
  border: 1px solid #8d93fd;
`
const InputMessage = styled.textarea`
  width: 95%;
  padding: 0.5rem;
  border-radius: 10px;
  outline: none;
  border: 1px solid #8d93fd;
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
  background-color: #16078e;
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
        <Image></Image>
        <Details>
          <Title>Contact</Title>
          <Desc>The Orion School</Desc>
        </Details>
      </Container>
      <Container>
        <Form>
          <Left>
            <LeftWrapper>
              <Heading>Love to hear from you, get in touch 👋</Heading>
              <DetailsWrapper>
                <DetailItem>
                  <WhatsApp
                    style={{
                      fontSize: '2rem',
                      color: 'white',
                    }}
                  />
                  <Info href='tel:+923077879988'>03077879988</Info>
                </DetailItem>
                <DetailItem>
                  <Email
                    style={{
                      fontSize: '2rem',
                      color: 'white',
                    }}
                  />
                  <Info>help@orionedu.net</Info>
                </DetailItem>
                <DetailItem>
                  <LocationOn
                    style={{
                      fontSize: '2rem',
                      color: 'white',
                    }}
                  />
                  <Info>help@orionedu.net</Info>
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
