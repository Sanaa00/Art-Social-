import './share.style.scss'
import { useState } from 'react'
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
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />{' '}
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
        ) : (
          <CiImageOn />
        )}
      </div>
    </div>
  )
}

export default SharePost
