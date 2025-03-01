import './post.style.scss'

function Posts() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((post) => {
        return (
          <div className="post">
            <div>profile and name </div>
            <div className="post-txt">
              text of the post
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{' '}
            </div>
            <img src=" " className="" />
            <div>like and comment </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
