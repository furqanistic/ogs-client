import React from 'react'
import { useLocation } from 'react-router-dom'

import LoginCard from '../components/Login/LoginCard'

const Login = () => {
  const location = useLocation()

  return (
    <>
      <LoginCard />
    </>
  )
}

export default Login
