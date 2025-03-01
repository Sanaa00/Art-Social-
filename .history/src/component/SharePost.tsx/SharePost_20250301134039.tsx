import './share.style.scss'
// import { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { useState, useRef } from 'react'
function SharePost() {
  const [image, setImage] = useState(null)
  const [text, setText] = useState('')
  const textareaRef = useRef(null)
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImage(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (event) => {
    setText(event.target.value)
    adjustHeight()
  }
  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto' // Reset height
      textarea.style.height = textarea.scrollHeight + 'px' // Adjust to content
    }
  }
  return (
    <div className="post">
      <div className="post">
        <div className="text-container">
          {' '}
          {/* <span>profile </span> */}
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            placeholder="What is in your mind...."
            className="post-input"
          />
        </div>
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
        <button className="primary-btn">Post</button>{' '}
      </div>
    </div>
  )
}

export default SharePost
