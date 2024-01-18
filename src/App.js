import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Register from './components/Signup/Register'
import About from './pages/About'
import Signin from './components/Signup/Signin'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Admissions from './pages/Admissions'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='register' element={<Register />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Signin />} />
            <Route path='signup' element={<Register />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='contact' element={<Contact />} />
            <Route path='admissions' element={<Admissions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
