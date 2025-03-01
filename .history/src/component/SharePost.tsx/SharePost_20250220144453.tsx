import './share.style.scss'
import { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
function SharePost() {
  const [image, setImage] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImage(reader.result)
      reader.readAsDataURL(file)
    }
  }
  return (
    <div>
      <div>
        <p>profile </p>
        <input placeholder="What is in your mind...." />
      </div>
      <div>
        <div className="img-container">
          <input
            type="file"
            accept="image/*"
            className="img"
            onChange={handleImageChange}
          />
          {image ? (
            <img src={image} alt="Uploaded" className="img-icon" />
          ) : (
            <CiImageOn />
          )}
        </div>
      </div>
      <button>Post</button>
    </div>
  )
}

export default SharePost
