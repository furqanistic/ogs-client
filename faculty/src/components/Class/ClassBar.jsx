import { Add } from '@mui/icons-material'
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
  background-color: #04772a;
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

const ClassBar = ({ onButtonClick }) => {
  return (
    <WrapBtn>
      <LabelWrap>
        <InfoText>Showing Total 6 Classes Here</InfoText>
      </LabelWrap>
      <BtnSet>
        <Link to='/subjects' style={{ textDecoration: 'none' }}>
          <BtnTwo variant='outlined' color='primary' onClick={onButtonClick}>
            <Add style={{ marginRight: '5px' }} /> Add Subject
          </BtnTwo>
        </Link>
        <GreenBtn variant='outlined' color='primary' onClick={onButtonClick}>
          <Add style={{ marginRight: '5px' }} /> Add Class
        </GreenBtn>
      </BtnSet>
    </WrapBtn>
  )
}

export default ClassBar
