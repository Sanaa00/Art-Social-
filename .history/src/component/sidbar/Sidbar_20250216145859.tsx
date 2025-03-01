import { Link } from 'react-router-dom'
import '../sidbar/sidbar.syle.scss'
function Sidbar() {
  return (
    <div className="sidbarContainer">
      <Link to="/">feed</Link>
      <Link to="/friend">friend</Link>
      <Link to="/message">Message</Link>
    </div>
  )
}

export default Sidbar
