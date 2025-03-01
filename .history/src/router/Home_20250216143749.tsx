import React from 'react'
import Sidbar from '../component/sidbar/Sidbar'
import { Outlet } from 'react-router-dom'
import '../style/home.style.scss'
function Home() {
  return (
    <div className="container">
      <Sidbar />
      <Outlet />
    </div>
  )
}

export default Home
