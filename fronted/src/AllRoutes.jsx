import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Forms from './Pages/Forms'
import Preview from './Pages/Preview'
const AllRoutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Forms/>} />
    <Route path='/pre' element={<Preview/>} />
    </Routes>
    </>
  )
}

export default AllRoutes