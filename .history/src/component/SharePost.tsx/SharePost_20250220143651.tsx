import './share.style.scss'

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
        <input />
      </div>
    </div>
  )
}

export default SharePost
