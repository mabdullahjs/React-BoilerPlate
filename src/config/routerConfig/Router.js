import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
// import ProtectedRoutes from './ProtectedRoutes'
import Register from '../../pages/Signup'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router