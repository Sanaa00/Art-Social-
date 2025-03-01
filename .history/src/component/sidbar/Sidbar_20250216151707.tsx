import { Link } from 'react-router-dom'
import '../sidbar/sidbar.style.scss'

function Sidbar() {
  return (
    <div className="sidbarContainer">
      <nav>
        <Link to="/">feed</Link>
        <Link to="/friend">friend</Link>
        <Link to="/message">Message</Link>
      </nav>
    </div>
  )
}

export default Sidbar
