import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const navStyle = {
    color: "white"
  }
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li>
          <Link style={navStyle} to="/">Home</Link>
        </li>
        <li>
          <Link style={navStyle} to="/about">About</Link>
        </li>
        <li>
          <Link  style={navStyle} to="/books">Books</Link>
        </li>
      </ul>
    </nav>
  )
}
