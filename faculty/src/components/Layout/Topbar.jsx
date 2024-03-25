import { ArrowBack, BackHand } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  font-weight: 300;
  letter-spacing: 2px;
  color: #3aa933;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-transform: capitalize;
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
  const { currentUser } = useSelector((state) => state.user)
  const navigate = useNavigate()

  return (
    <Bar>
      <Left>
        <Title>
          <ArrowBack
            onClick={() => navigate(-1)}
            style={{
              background: '#3aa933',
              padding: '0.2rem',
              fontSize: '2.3rem',
              borderRadius: '50%',
              marginRight: '20px',
              color: 'white',
              cursor: 'pointer',
            }}
          />
          {title}
        </Title>
      </Left>
      <Right>
        {currentUser ? (
          <ProfileWrap>
            <ProfileName>
              {currentUser.firstName} {currentUser.lastName}
            </ProfileName>
            <ProfileRole>{currentUser.email || 'orionedu.net'}</ProfileRole>
          </ProfileWrap>
        ) : (
          <ProfileWrap>
            <ProfileName>User...</ProfileName>
            <ProfileRole>Role...</ProfileRole>
          </ProfileWrap>
        )}
        <ProfileImg
          src={
            currentUser?.profileImage ||
            'https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png'
          }
          alt='User Profile'
        />
      </Right>
    </Bar>
  )
}

export default Topbar
