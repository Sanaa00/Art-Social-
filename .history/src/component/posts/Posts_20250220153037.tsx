import './post.style.scss'

function Posts() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((post) => {
        return <div className="pos"></div>
      })}
    </div>
  )
}

export default Posts
