import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Activity from './pages/Activity'
import Chat from './pages/Chat'
import Dashboard from './pages/Dashboard'
import Event from './pages/Event'
import Finance from './pages/Finance'
import Students from './pages/Students'
import Teachers from './pages/Teacher'
import User from './pages/User'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Dashboard />} />
          <Route path='students' element={<Students />} />
          <Route path='users' element={<User />} />
          <Route path='teachers' element={<Teachers />} />
          <Route path='events' element={<Event />} />
          <Route path='finances' element={<Finance />} />
          <Route path='chats' element={<Chat />} />
          <Route path='activity' element={<Activity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
