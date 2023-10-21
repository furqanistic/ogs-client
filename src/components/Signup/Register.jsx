import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

import './Register.css'
import Footer from '../Footer'
const Register = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='box'>
          <div className='form'>
            <h2>Register</h2>
            <div className='inputBox'>
              <input type='text' required='required' />
              <span>Username</span>
              <i></i>
            </div>
            <div className='inputBox'>
              <input type='password' required='required' />
              <span>Email</span>
              <i></i>
            </div>
            <div className='inputBox'>
              <input type='password' required='required' />
              <span>Password</span>
              <i></i>
            </div>
            <div className='links'>
              <a>Forgot password?</a>
              <Link to='/login'>Already Have ? Login</Link>
            </div>
            <a>
              <input type='submit' value='Register' />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
