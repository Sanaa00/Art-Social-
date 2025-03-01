import './notification.style.scss'
function Notification() {
  const noty = [
    {
      id: 1,
      text: 'Sana Liked you posts',
    },
  ]
  return (
    <div className="noty-container">
      <p className="noty-title">Notification</p>
    </div>
  )
}

export default Notification
