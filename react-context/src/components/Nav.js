import React, { useContext } from 'react'
import '../index.css'
import { Store } from '../Store'

const Nav = () => {
    const [movies] = useContext(Store)
  return (
    <nav className='navbar'>
        <h3>Ray</h3>
        <p>List of Movies: {movies.length}</p>
    </nav>
  )
}

export default Nav;

