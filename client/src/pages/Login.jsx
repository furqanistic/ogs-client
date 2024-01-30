import React from 'react'
import { useLocation } from 'react-router-dom'

import LoginCard from '../components/Login/LoginCard'
import Navbar from '../components/Navbar'

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
    <>
      <Navbar />
      <LoginCard title={title} />
    </>
  )
}

export default Login
