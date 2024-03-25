import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Activity from './pages/Activity'
import Chat from './pages/Chat'
import Class from './pages/Class'
import Dashboard from './pages/Dashboard'
import Event from './pages/Event'
import Login from './pages/Login'
import Publish from './pages/Publish'
import Students from './pages/Students'
import EditStudent from './pages/Students/EditStudent'
import FeeSlip from './pages/Students/FeeSlip'
import FeeSlipDetails from './pages/Students/FeeSlipDetails'
import StudentAdmissions from './pages/Students/StudentAdmissions'
import ViewStudent from './pages/Students/ViewStudent'
import Teachers from './pages/Teacher'
import AddTeacher from './pages/Teacher/AddTeacher'
import EditTeacher from './pages/Teacher/EditTeacher'
import ViewTeacher from './pages/Teacher/ViewTeacher'
import User from './pages/User'

const App = () => {
  const { currentUser } = useSelector((state) => state.user)

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
          <Route path='/'>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='students'>
              <Route index element={<Students />} />
              <Route path='all-admissions'>
                <Route index element={<StudentAdmissions />} />
                <Route path='view/:id' element={<ViewStudent />} />
                <Route path='edit/:id' element={<EditStudent />} />
              </Route>
              <Route path='fee-challan'>
                <Route index element={<FeeSlip />} />
                <Route path=':id' element={<FeeSlipDetails />} />
              </Route>
            </Route>
            <Route path='users' element={<User />} />
            <Route path='class' element={<Class />} />
            <Route path='teachers'>
              <Route index element={<Teachers />} />
              <Route path='add' element={<AddTeacher />} />
              <Route path='view/:id' element={<ViewTeacher />} />
              <Route path='edit/:id' element={<EditTeacher />} />
            </Route>
            <Route path='events' element={<Event />} />
            <Route path='publish' element={<Publish />} />
            <Route path='chats' element={<Chat />} />
            <Route path='activity' element={<Activity />} />
          </Route>
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
