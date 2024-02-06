import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #0b0a45;

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
  background-color: #0b0a45;
  @media only screen and (max-width: 700px) {
    width: 95vw;
  }
`
const NewsBox = styled.div`
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
  border-radius: 20px;
  /* border: 0.8px dashed white; */
  padding: 0.8rem;
  font-size: 0.8rem;
  background-color: #ffffff;
  color: #0b0a45;
  margin: 1rem;
  font-weight: 300;
  transition: all 0.5s ease-in-out;
`
const Heading = styled.h1`
  font-size: 2rem;

  font-weight: 400;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
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
              <Heading>What's New ? </Heading>
            </Box>
            <NewsBox>
              <NewsOne>
                We are currently seeking passionate and dedicated educators to
                join our team. If you're enthusiastic about shaping young minds
                and fostering a love for learning, we invite you to explore
                teaching positions at our institution.Join us in creating a
                positive educational impact. Apply today and be a part of our
                commitment to excellence in teaching.
              </NewsOne>
              <NewsOne>
                Orion is excited to announce open management positions within
                our institution. If you're a dynamic and motivated individual
                with a passion for education and a drive to make a positive
                impact, we encourage you to explore management roles at our
                school.
              </NewsOne>
              <NewsOne>
                Safety is our priority, and we're looking for dedicated
                individuals to join our security team at Orion. If you are
                committed to ensuring a secure and welcoming environment for our
                students, staff, and visitors, we encourage you to explore the
                security positions available.Apply today and be part of our
                commitment to safety and security.
              </NewsOne>
              <NewsOne>
                We're thrilled to announce that admissions for the upcoming
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
