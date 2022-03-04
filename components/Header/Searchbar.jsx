import React from 'react'
import { FcSearch } from 'react-icons/fc'
const styles = {
  wrapper: 'w-full max-w-[800px] rounded-xl h-12 p-4  bg-[#151620]',
  searchInput:
    'bg-transparent h-full w-full border-none outline-none text-white',
}
const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className="flex items-center space-x-3">
        <FcSearch className="text-2xl" />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default SearchBar
