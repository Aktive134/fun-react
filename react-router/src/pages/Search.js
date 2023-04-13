import React, { useState } from 'react'
import JSONDATA from '../MOCK_DATA.json'

function Search() {
  const [searchItem, setSearchItem] = useState('')

  const handleSearch = (event) => {
    const { value } = event.target
    setSearchItem(value)
  }
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        onChange={handleSearch}
      />
      {JSONDATA.filter((value) => {
        if (searchItem === '') {
          return value
        } else if (
          value.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return value
        }
      }).map((value, key) => {
        return (
          <div key={key}>
            <p>{value.first_name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Search
