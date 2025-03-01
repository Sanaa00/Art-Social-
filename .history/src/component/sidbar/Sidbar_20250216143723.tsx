import { Link } from 'react-router-dom'

function Sidbar() {
  return (
    <div className="container">
      sidebar
      <Link to="/">feed</Link>
      <Link to="/friend">friend</Link>
      <Link to="message">Message</Link>
    </div>
  )
}

export default Sidbar
