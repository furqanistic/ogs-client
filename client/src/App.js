import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
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
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='contact' element={<Contact />} />
            <Route path='admissions' element={<Admissions />} />
            <Route path='portals' element={<Portals />} />
            <Route path='rector-message' element={<RectorMessage />} />
          </Route>
          <Route path='/'>
            <Route path='student/login' element={<Login />} />
            <Route path='faculty/login' element={<Login />} />
            <Route path='management/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
