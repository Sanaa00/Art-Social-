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
        <div className="relative w-24 h-24 flex items-center justify-center border rounded-full cursor-pointer overflow-hidden">
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageChange}
          />
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <CiImageOn className="w-10 h-10 text-gray-500" />
          )}
        </div>
      </div>
    </div>
  )
}

export default SharePost
