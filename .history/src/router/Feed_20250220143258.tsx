import '../style/feed.style.scss'
import Search from '../component/serach/Search'
import Profile from '../component/Profile/Profile'
import SharePost from '../component/SharePost.tsx/SharePost'
function Feed() {
  return (
    <div className="feed">
      <div className="topbar">
        <div>
          <Search />
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <div className="feedContent">
        <div className="postSection">
          <div>
            <SharePost />
          </div>
          <div className="posts">postakan</div>
        </div>
        <div className="notificationSection">notification</div>
      </div>
    </div>
  )
}

export default Feed
