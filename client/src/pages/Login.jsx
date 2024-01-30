import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import LoginCard from '../components/Login/LoginCard'
import Navbar from '../components/Navbar'
const Wrap = styled.div`
  background-color: red;
`
const getTitle = (pathname) => {
  if (pathname.includes('/student/login')) {
    return 'Student Portal'
  } else if (pathname.includes('/faculty/login')) {
    return 'Faculty Portal'
  } else if (pathname.includes('/management/login')) {
    return 'Management Portal'
  } else {
    // Default title or handle other cases if needed
    return 'Login'
  }
}
const Login = () => {
  const location = useLocation()
  const title = getTitle(location.pathname)
  return (
    <Wrap>
      <Navbar />
      <LoginCard title={title} />
    </Wrap>
  )
}

export default Login
