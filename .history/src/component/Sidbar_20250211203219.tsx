import React from 'react'
import { Link } from 'react-router-dom'

function Sidbar() {
  return (
    <div>
      sidebar
      <Link to="/">feed</Link>
      <Link to="/friend">friend</Link>
      <Link to="message">Message</Link>
      {/* <Link>feed</Link> */}
    </div>
  )
}

export default Sidbar
