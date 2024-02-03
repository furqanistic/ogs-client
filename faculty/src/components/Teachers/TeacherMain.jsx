import { Add, Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
const Wrap = styled.div`
  color: white;
`
const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  border-radius: 15px;
  padding: 0.2rem;
`
const SearchBox = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
`
const Btn = styled.button`
  font-size: 1rem;
  background-color: #3aa933;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-weight: 600;
  margin-right: 2rem;
  cursor: pointer;
`
const TeacherMain = () => {
  return (
    <Wrap>
      <Bar>
        <BarWrap>
          <Search style={{ margin: '0.3rem' }} />
          <SearchBox placeholder='Search here...' />
        </BarWrap>
        <Btn>
          <Add />
          New Teacher
        </Btn>
      </Bar>
    </Wrap>
  )
}

export default TeacherMain
