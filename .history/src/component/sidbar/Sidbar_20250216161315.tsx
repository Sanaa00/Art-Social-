import { Link, NavLink } from 'react-router-dom'
import './sidbar.syle.scss'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { LiaUserFriendsSolid } from 'react-icons/lia'
function Sidbar() {
  return (
    <div className="sidbarContainer">
      <nav className="sidbarContainer ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '') + ''}
        >
          <RiHomeSmileLine /> feed
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
          <BiMessageSquareDetail /> Message
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidbar
