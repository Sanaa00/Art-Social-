import '../style/feed.style.scss'
function Feed() {
  return (
    <div className="feed">
      <div className="topbar">
        <div>
          <input placeholder="Search for people,post..." className="search" />
        </div>
        <div>profile</div>
      </div>
      <div className="feedContent">
        <div className="postSection">
          <div>to post section</div>
          <div className="posts">postakan</div>
        </div>
        <div className="notificationSection">notification</div>
      </div>
    </div>
  )
}

export default Feed
