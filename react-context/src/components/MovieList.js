import React, { useContext } from 'react'
import Movie from './Movie'
import { Store } from '../Store'

const MovieList = () => {
    const [movies] = useContext(Store)
  return (
    <div>
        {movies.map((movi) => (
            <Movie name={movi.name} price={movi.price} key={movi.id}  />
        ))}
    </div>
  )
}

export default MovieList;