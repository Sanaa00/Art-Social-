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
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          placeholder="What is in your mind...."
          className="post-input"
        />
      </div>
      <div className="img-upload-container">
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
        </div>{' '}
        <button>Post</button>{' '}
      </div>
    </div>
  )
}

export default SharePost
