import '../serach/search.style.scss'
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
