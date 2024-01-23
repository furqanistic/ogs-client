import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const CardContainer = styled.div`
  overflow: hidden;
  position: relative;
  text-align: left;
  border-radius: 0.5rem;
  max-width: 290px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: #fff;
`

const DismissButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: black;
  border: 2px solid #d1d5db;
  font-size: 1rem;
  font-weight: 300;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  transition: 0.3s ease;

  &:hover {
    background-color: #ee0d0d;
    border: 2px solid #ee0d0d;
    color: #fff;
  }
`

const Header = styled.div`
  padding: 1.25rem 1rem 1rem 1rem;
`

const Image = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2feee;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  animation: animate 0.6s linear alternate-reverse infinite;
  transition: 0.6s ease;

  svg {
    color: #0afa2a;
    width: 2rem;
    height: 2rem;
  }
`

const Content = styled.div`
  margin-top: 0.75rem;
  text-align: center;
`

const Title = styled.span`
  color: #066e29;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
`

const Message = styled.p`
  margin-top: 0.5rem;
  color: #595b5f;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

const Actions = styled.div`
  margin: 0.75rem 1rem;
`

const HistoryButton = styled.button`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: #005d30;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
`

const TrackButton = styled.button`
  display: inline-flex;
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  color: #242525;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
`

const animate = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.09);
  }
`

const ImageAnimation = styled(Image)`
  animation: ${animate} 0.6s linear alternate-reverse infinite;
`

const DisplayCard = () => {
  const CloseCard = () => {
    window.location.reload()
  }

  return (
    <CardContainer>
      <DismissButton type='button' onClick={CloseCard}>
        ×
      </DismissButton>
      <Header>
        <ImageAnimation>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20 7L9.00004 18L3.99994 13'
              stroke='#000000'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
        </ImageAnimation>
        <Content>
          <Title>Admission Form Submitted</Title>
          <Message>
            Thank you for submitting your admission form to Orion Grammar
            School! 😊 <br></br>
            <br></br>Your application is now under review. We will get back to
            you soon with further instructions.
          </Message>
        </Content>
        <Actions>
          <Link to='/contact'>
            <HistoryButton type='button'>Need Help?</HistoryButton>
          </Link>
          <Link>
            <TrackButton type='button' onClick={CloseCard}>
              Close
            </TrackButton>
          </Link>
        </Actions>
      </Header>
    </CardContainer>
  )
}

export default DisplayCard
