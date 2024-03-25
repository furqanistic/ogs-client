import { Add, Download, KeyboardDoubleArrowDown } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'

const GreenBtn = styled.button`
  background-color: transparent;
  padding: 1rem 0.8rem;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  margin-right: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  max-height: 40px;
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

const ClassBar = () => {
  return (
    <WrapBtn>
      <LabelWrap>
        <InfoText>Showing Total 6 Classes Here</InfoText>
      </LabelWrap>
      <BtnSet>
        <GreenBtn variant='outlined' color='primary'>
          <Add style={{ marginRight: '5px' }} /> Add Class
        </GreenBtn>
      </BtnSet>
    </WrapBtn>
  )
}

export default ClassBar
