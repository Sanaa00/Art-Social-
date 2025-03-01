import './notification.style.scss'
function Notification() {
  const noty = [
    {
      id: 1,
      text: 'Sana Liked you posts',
    },
    {
      id: 2,
      text: 'Sana Liked you posts',
    },
    {
      id: 3,
      text: 'Sana Liked you posts',
    },
    {
      id: 4,
      text: 'Sana Liked you posts',
    },
    {
      id: 5,
      text: 'Sana Liked you posts',
    },
    {
      id: 6,
      text: 'Sana Liked you posts',
    },
  ]
  return (
    <div className="noty-container">
      <p className="noty-title">Notification</p>
      <div>
        {noty.map((notification) => {
          return (
            <div key={notification.id}>
              <p></p>
              <p>21-2-2025</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Notification
