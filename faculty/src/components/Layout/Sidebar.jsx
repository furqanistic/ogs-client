import {
  Chat,
  CoPresent,
  Dashboard,
  ExitToApp,
  Face6,
  GppGood,
  Person,
  School,
} from '@mui/icons-material'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../img/logo.png'
import { logout } from '../../redux/userSlice'

const Bar = styled.div`
  color: #3aa933;
  height: 100%;
  width: 100%;
`

const Name = styled.div`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NameIcon = styled.img`
  width: 120px;
  object-fit: cover;
  display: flex;
  padding-top: 1rem;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  padding-top: 2rem;
  color: white;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: #ffffff;
  width: 100%;
  border-radius: 20px;
  transition: all 0.1s ease;
  margin-bottom: 5px;
  cursor: pointer;
`

const ItemName = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
`

const ItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const Linker = styled(Link)`
  text-decoration: none;
  width: 100%;
`

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedItem, setSelectedItem] = useState()

  const items = useMemo(
    () => [
      {
        name: 'Dashboard',
        icon: <Dashboard />,
        key: 'Dashboard',
        path: '/dashboard',
      },
      { name: 'Students', icon: <Face6 />, key: 'Students', path: '/students' },
      { name: 'Class', icon: <School />, key: 'Class', path: '/class' },
      {
        name: 'Teachers',
        icon: <CoPresent />,
        key: 'Teachers',
        path: '/teachers',
      },
      {
        name: 'Publish',
        icon: <GppGood />,
        key: 'publish',
        path: '/publish',
      },
      { name: 'Users', icon: <Person />, key: 'Users', path: '/users' },
      {
        name: 'Chat',
        icon: <Chat />,
        key: 'Chat',
        path: '/chats',
      },
    ],
    []
  )

  let filteredItems = items

  useEffect(() => {
    const currentKey = items.find(
      (item) => item.path === location.pathname
    )?.key
    if (currentKey) {
      setSelectedItem(currentKey)
    }
  }, [location.pathname, items])

  const handleClick = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <Bar>
        <IconBox>
          <NameIcon src='https://github.com/furqanistic/ogs-client/blob/website/faculty/src/img/logo-white.png?raw=true' />
        </IconBox>
        <ItemsWrapper>
          {filteredItems.map((item) => (
            <Linker
              to={item.path}
              key={item.key}
              style={{ textDecoration: 'none' }}
            >
              <Item
                onClick={() => setSelectedItem(item.key)}
                style={{
                  backgroundColor:
                    selectedItem === item.key ? '#3aa933' : 'transparent',
                  color: selectedItem === item.key ? '#25265f' : '#ffffff',
                }}
              >
                <ItemIcon>{item.icon}</ItemIcon>
                <ItemName>{item.name}</ItemName>
              </Item>
            </Linker>
          ))}
          <Item
            style={{
              color: '#3aa933',
              border: '1px solid #3aa933',
              marginTop: 'auto',
            }}
          >
            <ItemIcon>
              <ExitToApp />
            </ItemIcon>
            <ItemName onClick={handleClick}>Logout</ItemName>
          </Item>
        </ItemsWrapper>
      </Bar>
    </>
  )
}

export default Sidebar
