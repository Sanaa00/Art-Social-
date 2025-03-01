import '../serach/search.style.scss'
import { CiSearch } from 'react-icons/ci'
function Search() {
  return (
    <div className="searchContainer">
      <CiSearch className="searchIcon" />
      <input placeholder={`Search for people, post...`} className="search" />
    </div>
  )
}

export default Search
