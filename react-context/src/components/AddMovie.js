import React, { useState, useContext } from 'react'
import { Store } from '../Store'

const AddMovie = () => {
  const [movies, setMovies] = useContext(Store)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addMovie = (e) => {
    e.preventDefault()
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: 1237 },
    ])
  }

  return (
    <form onSubmit={addMovie}>
      <label for="name">Name</label>
      <br />
      <input type="text" name="name" value={name} onChange={updateName} />
      <br />
      <label for="price">Price</label>
      <br />
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
      />
      <br />
      <button>Submit</button>
    </form>
  )
}

export default AddMovie
