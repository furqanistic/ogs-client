import React from 'react'
import Navbar from '../Navbar'
import './Signin.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='box'>
          <div className='form'>
            <h2>Login</h2>
            <div className='inputBox'>
              <input type='text' required='required' />
              <span>Username</span>
              <i></i>
            </div>
            <div className='inputBox'>
              <input type='password' required='required' />
              <span>Password</span>
              <i></i>
            </div>
            <div className='links'>
              <a>Forgot password?</a>
              <Link to='/signup'>New User ? Sign Up</Link>
            </div>
            <a>
              <input type='submit' value='Login' />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin
