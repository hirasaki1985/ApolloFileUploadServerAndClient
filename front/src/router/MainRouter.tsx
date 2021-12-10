import React from 'react'
import { Route, Routes } from 'react-router-dom'

// pages
import MainPage from '../pages/MainPage'

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}
export default MainRouter
