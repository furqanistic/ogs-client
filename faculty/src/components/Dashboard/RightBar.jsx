import { Notifications, Settings } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
const Wrap = styled.div`
  background-color: white;
  min-width: 25rem;
  min-height: 100vh;
  padding: 1rem;
`
const TopSet = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 4;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  margin-right: 1rem;
`
const ProfileName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: right;
`
const ProfileRole = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: right;
`
const ProfileImage = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  object-fit: cover;
`
const RightBar = () => {
  return (
    <Wrap>
      <TopSet>
        <Left>
          <Badge badgeContent={4} color='primary'>
            <Notifications
              style={{
                backgroundColor: '#3aa933',
                fontSize: '3rem',
                padding: '0.5rem',
                borderRadius: '50%',
                color: 'white',
              }}
              color='success'
              badgeContent={4}
            />
          </Badge>
          <Settings
            style={{
              backgroundColor: '#3aa933',
              fontSize: '3rem',
              padding: '0.5rem',
              borderRadius: '50%',
              color: 'white',
              marginLeft: '1rem',
            }}
          />
        </Left>

        <Right>
          <ProfileInfo>
            <ProfileName>Waqas</ProfileName>
            <ProfileRole>Admin</ProfileRole>
          </ProfileInfo>
          <ProfileImage src='https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg' />
        </Right>
      </TopSet>
    </Wrap>
  )
}

export default RightBar
