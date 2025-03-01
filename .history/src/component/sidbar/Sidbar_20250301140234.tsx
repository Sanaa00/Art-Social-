import { Link, NavLink } from 'react-router-dom'
import './sidbar.syle.scss'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { RiHomeSmileLine } from 'react-icons/ri'
function Sidbar() {
  return (
    <div className="sidbar">
      <div>here is LOgo</div>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          <RiHomeSmileLine className="icon" /> feed
        </NavLink>

        <NavLink
          to="/Profile"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          <FaRegUser className="icon" /> Profile
        </NavLink>

        <NavLink
          to="/message"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          <BiMessageSquareDetail className="icon" /> Message
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidbar
