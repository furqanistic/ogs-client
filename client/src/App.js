import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Register from './components/Signup/Register'
import Signin from './components/Signup/Signin'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Portals from './pages/Portals'
import RectorMessage from './pages/RectorMessage'

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
            <Route path='portals' element={<Portals />} />
            <Route path='rector-message' element={<RectorMessage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
