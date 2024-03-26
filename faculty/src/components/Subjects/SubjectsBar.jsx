import { Add, Visibility } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GreenBtn = styled.button`
  background-color: transparent;
  padding: 1rem 0.8rem;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  max-height: 40px;
`
const BtnTwo = styled(GreenBtn)`
  color: #ffffff;
  background-color: #770404;
  font-weight: 500;
  border: none;
`

const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InfoText = styled.span`
  font-size: 2rem;
  color: white;
  font-weight: 300;
`
const LabelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BtnSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubjectsBar = ({ onButtonClick }) => {
  return (
    <WrapBtn>
      <LabelWrap>
        <InfoText>Showing Total 5 Subjects Here</InfoText>
      </LabelWrap>
      <BtnSet>
        <GreenBtn variant='outlined' color='primary' onClick={onButtonClick}>
          <Add style={{ marginRight: '5px' }} /> Add Subject
        </GreenBtn>
      </BtnSet>
    </WrapBtn>
  )
}

export default SubjectsBar
