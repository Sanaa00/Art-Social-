import '../serach/search.style.scss'
import { CiSearch } from 'react-icons/ci'
function Search() {
  return (
    <input
      placeholder={`${(
        <>
          <CiSearch />
        </>
      )}Search for people, post`}
      className="search"
    />
  )
}

export default Search
