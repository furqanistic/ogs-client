import React from 'react'
import styled from 'styled-components'
import G1 from '../img/g1.jpg'
import G2 from '../img/g2.jpg'
import G3 from '../img/g3.jpg'
import G4 from '../img/g4.jpg'
import G5 from '../img/g5.jpg'

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #012d01;
  display: flex;
  flex: 2;
`
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  width: 40vw;
  height: 50px;
  background-color: #1ac61aa8;
`
const NewsBox = styled.div`
  border: 1px solid #1ac61aa8;
  height: 500px;
  width: 40vw;
  padding: 0.5rem;
`
const NewsOne = styled.div`
  margin: 0.4rem;
  border-radius: 10px;
  /* border: 2px solid white; */
  padding: 0.5rem;
  height: 100px;
  font-size: 0.8rem;
  background-color: #0080005b;
  color: white;
  margin: 1rem;
  text-align: justify;
  transition: all 0.5s ease-in-out;
  &:hover {
    scale: 1.1;
    border-radius: 0px;
  }
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
const Gallery = () => {
  return (
    <>
      <Container>
        <Left>
          <Wrapper>
            <Box>
              <Heading>News & Highlights</Heading>
              <NewsBox>
                <NewsOne>
                  ● Minister of Federal Education and Professional Training Rana
                  Tanveer Hussain met with a delegation of the Oxford Pakistan
                  Programme today on 13th December, 2022. Chairman HEC Dr.
                  Mukhtar Ahmed, Additional Secretary Waseem Ajmal Chaudhry also
                  attended the meeting.
                </NewsOne>
                <NewsOne>
                  ● Minister of Federal Education and Professional Training Rana
                  Tanveer Hussain met with a delegation of the Oxford Pakistan
                  Programme today on 13th December, 2022. Chairman HEC Dr.
                  Mukhtar Ahmed, Additional Secretary Waseem Ajmal Chaudhry also
                  attended the meeting.
                </NewsOne>
                <NewsOne>
                  ● Minister of Federal Education and Professional Training Rana
                  Tanveer Hussain met with a delegation of the Oxford Pakistan
                  Programme today on 13th December, 2022. Chairman HEC Dr.
                  Mukhtar Ahmed, Additional Secretary Waseem Ajmal Chaudhry also
                  attended the meeting.
                </NewsOne>
                <NewsOne>
                  ● Minister of Federal Education and Professional Training Rana
                  Tanveer Hussain met with a delegation of the Oxford Pakistan
                  Programme today on 13th December, 2022. Chairman HEC Dr.
                  Mukhtar Ahmed, Additional Secretary Waseem Ajmal Chaudhry also
                  attended the meeting.
                </NewsOne>
              </NewsBox>
            </Box>
          </Wrapper>
        </Left>
        <Right>
          <Parent>
            <DivOne>
              <ImageGallery src={G1} />
            </DivOne>
            <DivTwo>
              <ImageGallery src={G2} />
            </DivTwo>
            <DivThree>
              <ImageGallery src={G3} />
            </DivThree>
            <DivFour>
              <ImageGallery src={G4} />
            </DivFour>
            <DivFive>
              <ImageGallery src={G5} />
            </DivFive>
          </Parent>
        </Right>
      </Container>
    </>
  )
}

export default Gallery
