import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: #3aa933;
  text-transform: uppercase;
`
const Left = styled.div`
  display: flex;
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  margin-right: 2rem;
`
const ProfileWrap = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`
const ProfileName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`
const ProfileRole = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  object-fit: cover;
`
const Topbar = ({ title }) => {
  return (
    <>
      <Bar>
        <Left>
          <Title>{title}</Title>
        </Left>
        <Right>
          <ProfileWrap>
            <ProfileName>Furqan</ProfileName>
            <ProfileRole>Admin</ProfileRole>
          </ProfileWrap>
          <ProfileImg src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200' />
        </Right>
      </Bar>
    </>
  )
}

export default Topbar
