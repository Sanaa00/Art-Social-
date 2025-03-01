import '../style/feed.style.scss'
import Search from '../component/serach/Search'
import Profile from '../component/Profile/Profile'
import SharePost from '../component/SharePost.tsx/SharePost'
import Posts from '../component/posts/Posts'
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
          <div className="posts">
            <Posts />
          </div>
        </div>
        <div className="notificationSection"></div>
      </div>
    </div>
  )
}

export default Feed
