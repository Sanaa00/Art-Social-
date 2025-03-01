import { Link, NavLink } from 'react-router-dom'
import './sidbar.syle.scss'
import { LiaUserFriendsSolid } from 'react-icons/lia'
function Sidbar() {
  return (
    <div className="sidbarContainer">
      <nav className="sidbarContainer ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          feed
        </NavLink>
        <NavLink
          to="/friend"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          <LiaUserFriendsSolid /> friend
        </NavLink>
        <NavLink
          to="/message"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          Message
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidbar
