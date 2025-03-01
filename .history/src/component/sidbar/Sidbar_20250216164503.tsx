import { Link, NavLink } from 'react-router-dom'
import './sidbar.syle.scss'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { RiHomeSmileLine } from 'react-icons/ri'
function Sidbar() {
  return (
    <div className="sidbarContainer">
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          <RiHomeSmileLine className="icon" /> feed
        </NavLink>

        <NavLink
          to="/friend"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          <LiaUserFriendsSolid className="icon" /> friend
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
