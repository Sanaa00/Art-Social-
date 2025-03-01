import './post.style.scss'

function Posts() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((post) => {
        return (
          <div className="post">
            <div>profile and name </div>
            <div>text of the post </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
