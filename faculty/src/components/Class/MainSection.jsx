import { EmojiEmotions, LibraryBooks } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
const Wrap = styled.div`
  padding: 1rem 0;
`
const BoxWrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 3;
  flex-wrap: wrap;
`
const Box = styled.div`
  flex: 1;
  display: flex;
  border-radius: 10px;
  color: white;
  border: 1px solid #5c6bf0;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  max-width: 250px;
  min-width: 250px;
  background-color: #020131;
  justify-content: space-around;
  margin: 2rem;
  padding: 1rem;
  -webkit-box-shadow: inset 0px 0px 10px 0px rgba(40, 115, 235, 1);
  -moz-box-shadow: inset 0px 0px 10px 0px rgba(40, 115, 235, 1);
  box-shadow: inset 0px 0px 10px 0px rgba(40, 115, 235, 1);
`
const BoxTitle = styled.p`
  font-size: 1.3rem;
  text-align: center;
  font-weight: 700;
`
const BoxInfoWrap = styled.div`
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 1rem;
  color: #9c0303;
`
const BoxLabel = styled.span`
  color: #ffffff;
  margin: 0 5px;
`
const BoxLabelValue = styled.span`
  font-weight: 500;
  color: #ffffff;
`
const ButtonSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled.button`
  min-width: 70px;
  color: white;

  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  transition: all 0.1s ease-in;
  background-color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`

const MainSection = () => {
  return (
    <Wrap>
      <BoxWrap>
        <Box>
          <BoxTitle>PG Dolphin</BoxTitle>
          <BoxInfoWrap>
            <EmojiEmotions />
            <BoxLabel>Students : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <BoxInfoWrap>
            <LibraryBooks />
            <BoxLabel>Subjects : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <ButtonSet>
            <Btn style={{ backgroundColor: '#3aa933' }}>View</Btn>
            <Btn style={{ backgroundColor: '#0033ff' }}>Edit</Btn>
          </ButtonSet>
        </Box>
        <Box>
          <BoxTitle>Nursery Dove</BoxTitle>
          <BoxInfoWrap>
            <EmojiEmotions />
            <BoxLabel>Students : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <BoxInfoWrap>
            <LibraryBooks />
            <BoxLabel>Subjects : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <ButtonSet>
            <Btn style={{ backgroundColor: '#3aa933' }}>View</Btn>
            <Btn style={{ backgroundColor: '#0033ff' }}>Edit</Btn>
          </ButtonSet>
        </Box>
        <Box>
          <BoxTitle>KG Swan</BoxTitle>
          <BoxInfoWrap>
            <EmojiEmotions />
            <BoxLabel>Students : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <BoxInfoWrap>
            <LibraryBooks />
            <BoxLabel>Subjects : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <ButtonSet>
            <Btn style={{ backgroundColor: '#3aa933' }}>View</Btn>
            <Btn style={{ backgroundColor: '#0033ff' }}>Edit</Btn>
          </ButtonSet>
        </Box>
        <Box>
          <BoxTitle>One Red</BoxTitle>
          <BoxInfoWrap>
            <EmojiEmotions />
            <BoxLabel>Students : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <BoxInfoWrap>
            <LibraryBooks />
            <BoxLabel>Subjects : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <ButtonSet>
            <Btn style={{ backgroundColor: '#3aa933' }}>View</Btn>
            <Btn style={{ backgroundColor: '#0033ff' }}>Edit</Btn>
          </ButtonSet>
        </Box>
        <Box>
          <BoxTitle>One Green</BoxTitle>
          <BoxInfoWrap>
            <EmojiEmotions />
            <BoxLabel>Students : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <BoxInfoWrap>
            <LibraryBooks />
            <BoxLabel>Subjects : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <ButtonSet>
            <Btn style={{ backgroundColor: '#3aa933' }}>View</Btn>
            <Btn style={{ backgroundColor: '#0033ff' }}>Edit</Btn>
          </ButtonSet>
        </Box>
        <Box>
          <BoxTitle>One Blue</BoxTitle>
          <BoxInfoWrap>
            <EmojiEmotions />
            <BoxLabel>Students : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <BoxInfoWrap>
            <LibraryBooks />
            <BoxLabel>Subjects : </BoxLabel>
            <BoxLabelValue>0</BoxLabelValue>
          </BoxInfoWrap>
          <ButtonSet>
            <Btn style={{ backgroundColor: '#3aa933' }}>View</Btn>
            <Btn style={{ backgroundColor: '#0033ff' }}>Edit</Btn>
          </ButtonSet>
        </Box>
      </BoxWrap>
    </Wrap>
  )
}

export default MainSection
