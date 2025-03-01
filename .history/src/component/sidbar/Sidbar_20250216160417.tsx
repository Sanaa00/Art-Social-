import { Link, NavLink } from 'react-router-dom'
import './sidbar.syle.scss'

function Sidbar() {
  return (
    <div className="sidbarContainer">
      <nav className=" ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          feed
        </NavLink>
        <NavLink to="/friend">friend</NavLink>
        <NavLink to="/message">Message</NavLink>
      </nav>
    </div>
  )
}

export default Sidbar
