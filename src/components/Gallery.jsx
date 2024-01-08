import React from 'react'
import styled from 'styled-components'
import G1 from '../img/g1.jpg'
import G2 from '../img/g2.jpg'
import G3 from '../img/g3.jpg'
import G4 from '../img/g4.jpg'
import G5 from '../img/g5.jpg'

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #3aa933;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23319a55' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%232e8a74' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%232c6e7c' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%2328466d' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%2325265F' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%2328466d' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%232c6e7c' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%232e8a74' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23319a55' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%233AA933' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  padding: 1rem;
  flex: 2;
`
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 0rem;
  }
`
const Box = styled.div`
  width: 40vw;
  background-color: #1ac61aa8;
  @media only screen and (max-width: 700px) {
    width: 95vw;
  }
`
const NewsBox = styled.div`
  border: 1px solid #1ac61aa8;
  background-color: #3ba9338b;
  height: 500px;
  width: 40vw;
  padding: 0.5rem;
  overflow-y: auto;
  @media only screen and (max-width: 700px) {
    width: 95vw;
  }
`
const NewsOne = styled.div`
  margin: 0.4rem;
  border-radius: 10px;
  /* border: 2px solid white; */
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: #ffffffc5;
  color: #013f01;
  margin: 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    scale: 1.1;
    border-radius: 0px;
  }
`
const Heading = styled.h1`
  font-size: 2rem;
  border: 1px solid #1ac61aa8;

  font-weight: 400;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #25265f;
`
const Parent = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`
const Left = styled.div`
  flex: 0.8;
`
const Right = styled.div`
  flex: 1.2;
  height: 100%;
  @media only screen and (max-width: 700px) {
    display: none;
    visibility: hidden;
  }
`
const DivOne = styled.div`
  grid-area: 1 / 1 / 5 / 3;
  height: 100%;
  width: 100%;
`
const DivTwo = styled.div`
  grid-area: 1 / 3 / 3 / 5;

  height: 270px;
`
const DivThree = styled.div`
  grid-area: 3 / 3 / 5 / 5;
`
const DivFour = styled.div`
  grid-area: 1 / 5 / 3 / 7;
`
const DivFive = styled.div`
  grid-area: 3 / 5 / 5 / 7;
  background-color: #c0c9ff;
`
const ImageGallery = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Imp = styled.div`
  height: 3rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #25265f;
  font-weight: 600;
`
const Gallery = () => {
  return (
    <>
      <Imp>News & Highlights</Imp>
      <Container>
        <Left>
          <Wrapper>
            <Box>
              <Heading>⬇️ Updates ⬇️</Heading>
            </Box>
            <NewsBox>
              <NewsOne>
                ● We are currently seeking passionate and dedicated educators to
                join our team. If you're enthusiastic about shaping young minds
                and fostering a love for learning, we invite you to explore
                teaching positions at our institution.Join us in creating a
                positive educational impact. Apply today and be a part of our
                commitment to excellence in teaching.
              </NewsOne>
              <NewsOne>
                ● Orion is excited to announce open management positions within
                our institution. If you're a dynamic and motivated individual
                with a passion for education and a drive to make a positive
                impact, we encourage you to explore management roles at our
                school.
              </NewsOne>
              <NewsOne>
                ● Safety is our priority, and we're looking for dedicated
                individuals to join our security team at Orion. If you are
                committed to ensuring a secure and welcoming environment for our
                students, staff, and visitors, we encourage you to explore the
                security positions available.Apply today and be part of our
                commitment to safety and security.
              </NewsOne>
              <NewsOne>
                ● We're thrilled to announce that admissions for the upcoming
                academic year at Orion will be opening soon. We're dedicated to
                providing a high-quality education and welcoming new students
                who are eager to embark on a journey of learning, growth, and
                discovery.
              </NewsOne>
            </NewsBox>
          </Wrapper>
        </Left>
        <Right>
          <Parent>
            <DivOne>
              <ImageGallery src='https://images.pexels.com/photos/8466776/pexels-photo-8466776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </DivOne>
            <DivTwo>
              <ImageGallery src='https://images.pexels.com/photos/8613121/pexels-photo-8613121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </DivTwo>
            <DivThree>
              <ImageGallery src='https://images.pexels.com/photos/8535236/pexels-photo-8535236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </DivThree>
            <DivFour>
              <ImageGallery src='https://images.pexels.com/photos/1089069/pexels-photo-1089069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </DivFour>
            <DivFive>
              <ImageGallery src='https://images.pexels.com/photos/5274616/pexels-photo-5274616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </DivFive>
          </Parent>
        </Right>
      </Container>
    </>
  )
}

export default Gallery
