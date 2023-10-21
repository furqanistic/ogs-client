import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material/'
import { useState } from 'react'
import styled from 'styled-components'
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
  background-color: #${(props) => props.bg};
  flex: 5;
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
  clip-path: polygon(18% 0, 82% 0, 100% 50%, 82% 100%, 18% 100%, 0% 50%);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 2;
  padding: 50px;
  @media only screen and (max-width: 780px) {
    padding: 20px;
  }
`

const Title = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;
  @media only screen and (max-width: 1170px) {
    font-size: 2.3rem;
  }
  @media only screen and (max-width: 780px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 670px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    font-weight: 500;
  }
  @media only screen and (max-width: 390px) {
    font-size: 0.8rem;
  }
`

const Desc = styled.p`
  text-align: center;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
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
  padding: 0.7rem;
  font-size: 1rem;
  border: none;
  background-color: white;
  border-radius: 30px;
  color: green;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #008000;
    color: white;
    border: 1px solid white;
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
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
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
