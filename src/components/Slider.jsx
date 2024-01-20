import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material/'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 0.5rem;
  @media only screen and (max-width: 780px) {
    height: 40vh;
  }
  @media only screen and (max-width: 480px) {
    height: 30vh;
  }
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media only screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: #${(props) => props.bg}; */
  background-image: url(${(props) => props.bp});
  flex: 5;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 44, 0, 0.3);
  }
  @media only screen and (max-width: 780px) {
    height: 40vh;
  }
  @media only screen and (max-width: 480px) {
    height: 30vh;
  }
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 2;
  margin-left: 2rem;
  background: #0c5403;
  /* clip-path: polygon(18% 0, 82% 0, 100% 50%, 82% 100%, 18% 100%, 0% 50%); */
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 50px; */
  z-index: 5;
  width: 100%;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Title = styled.p`
  font-size: 3rem;
  width: 100%;
  border: 1px solid #0da203;
  border-left: 0px;
  border-right: 0px;
  color: white;
  text-align: center;
  background-color: #075501c7;
  padding: 1rem;
  margin-bottom: 50px;

  @media only screen and (max-width: 1170px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 950px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 780px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 670px) {
    font-size: 1rem;
    padding: 0.6rem;
  }
  @media only screen and (max-width: 510px) {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.4rem;
  }
  @media only screen and (max-width: 470px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 390px) {
    font-size: 0.6rem;
  }
`

const Desc = styled.p`
  text-align: center;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  background-color: #ffffff36;
  animation: ${fadeIn} 1s ease-in-out; /* Apply the fadeIn animation */

  /* border: 1px solid white; */
  color: #ffffff;
  padding: 0.5rem;
  @media only screen and (max-width: 780px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 670px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 7px;
    letter-spacing: 1px;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
  background: #3aa933;
  box-shadow: 0 0 25px #3aa933;

  &:hover {
    box-shadow: 0 0 5px #3aa933, 0 0 25px #3aa933, 0 0 50px #3aa933,
      0 0 100px #3aa933;
  }
  @media only screen and (max-width: 780px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 0.3rem;
    font-size: 0.5rem;
  }
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bp={item.img} bg={item.bg} key={item.id}>
            {/* <ImgContainer>
              <Image src={item.img} />
            </ImgContainer> */}
            <InfoContainer>
              <Desc>{item.desc}</Desc>
              <Title>{item.title}</Title>
              <Button>More Details</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
