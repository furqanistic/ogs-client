import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 550px;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
`

const Title = styled.p`
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  &::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  &::after {
    width: 18px;
    height: 18px;
    animation: ${pulseAnimation} 1s linear infinite;
  }
`

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
  justify-content: center;
`

const Label = styled.label`
  position: relative;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  padding: 17px 10px 10px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;

  &:focus + span,
  &:valid + span {
    top: 5px;
    font-size: 0.7rem;
    font-weight: 600;
  }
`

const Span = styled.span`
  position: absolute;
  left: 10px;
  top: ${({ hasValue }) => (hasValue ? '0px' : '15px')};
  font-size: ${({ hasValue }) => (hasValue ? '0.7em' : '0.9em')};
  font-weight: ${({ hasValue }) => (hasValue ? '600' : 'normal')};
  color: ${({ hasValue }) => (hasValue ? 'green' : 'grey')};
  cursor: text;
  transition: 0.3s ease;
`
const SubmitButton = styled.button`
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transition: transform 0.3s ease;

  &:hover {
    background-color: rgb(56, 90, 194);
    cursor: pointer;
  }
`
const CloseBtn = styled(SubmitButton)`
  background-color: red;
  &:hover {
    background-color: rgb(194, 56, 56);
    cursor: pointer;
  }
`

const AddSubjectForm = () => {
  const navigate = useNavigate()

  return (
    <StyledForm>
      <Title>Add New Subject</Title>
      <FlexContainer>
        <Label>
          <Input type='text' placeholder='' required />
          <Span>Subject Name </Span>
        </Label>
      </FlexContainer>
      <SubmitButton>Add Subject</SubmitButton>
      <CloseBtn
        onClick={() => {
          navigate(0)
        }}
      >
        Close
      </CloseBtn>
    </StyledForm>
  )
}

export default AddSubjectForm
