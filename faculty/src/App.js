import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Activity from './pages/Activity'
import Chat from './pages/Chat'
import Dashboard from './pages/Dashboard'
import Event from './pages/Event'
import Finance from './pages/Finance'
import Login from './pages/Login'
import Students from './pages/Students'
import Teachers from './pages/Teacher'
import AddTeacher from './pages/Teacher/AddTeacher'
import ViewTeacher from './pages/Teacher/ViewTeacher'
import User from './pages/User'

const App = () => {
  const { currentUser } = useSelector((state) => state.user)

  const PrivateRoute = ({ element: Element, path }) => {
    return currentUser ? (
      <Route path={path} element={<Element />} />
    ) : (
      <Navigate to='/faculty-portal/login' />
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Navigate
              to={currentUser ? '/dashboard' : '/faculty-portal/login'}
            />
          }
        />

        {currentUser && (
          <>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/students' element={<Students />} />
            <Route path='/users' element={<User />} />
            <Route path='/teachers'>
              <Route index element={<Teachers />} />
              <Route path='add' element={<AddTeacher />} />
              <Route path='view/:id' element={<ViewTeacher />} />
            </Route>
            <Route path='/events' element={<Event />} />
            <Route path='/finances' element={<Finance />} />
            <Route path='/chats' element={<Chat />} />
            <Route path='/activity' element={<Activity />} />
          </>
        )}

        {/* Redirect to dashboard if user is already logged in */}
        {!currentUser && (
          <Route path='/faculty-portal/login' element={<Login />} />
        )}

        {/* Redirect to dashboard if user is already logged in */}
        {currentUser && (
          <Route
            path='/faculty-portal/login'
            element={<Navigate to='/dashboard' />}
          />
        )}

        {/* Catch-all route for unknown routes */}
        <Route path='*' element={<Navigate to='/faculty-portal/login' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
