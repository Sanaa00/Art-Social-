import React from 'react'
import Sidbar from '../component/Sidbar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Sidbar />
      <Outlet />
    </div>
  )
}

export default Home
