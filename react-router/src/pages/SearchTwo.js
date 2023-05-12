import React, { useState } from 'react'
const people = [
  'Shashi Koshy',
  'Dhriti Taneja',
  'Dipa Mishra',
  'Ansh Thakkar',
  'Lakshmi Thaker',
  'Sushila Matthai',
  'Shresth Nigam',
  'Bhavana Biswas',
  'Vasudha Mangat',
  'Priya Saran',
  'Andrea Pirlo',
  'Xabi Alonso',
  'Uti Kevin',
  'Magnu Carlsen',
  'Anatoly Karpov',
  'Bobby Fischer',
  'Ilkay Gundogan',
]

function SearchTwo() {
  const [filteredText, setFilteredText] = useState('')
  const handleFilter = (event) => {
    const { value } = event.target
    setFilteredText(value)
  }
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleFilter} />
      {people
        .filter((value) => {
          if (filteredText === '') {
            return value
          } else if (value.toLowerCase().includes(filteredText.toLowerCase())) {
            return value
          }
        })
        .map((value, key) => {
          return (
            <div key={key}>
              <p>{value}</p>
            </div>
          )
        })}
    </div>
  )
}

export default SearchTwo
