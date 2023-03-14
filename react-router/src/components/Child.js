import React, { useState } from 'react'
import '../App.css'

const Child = ({ setColor }) => {
  const [activeColor, setActiveColor] = useState(null)

  const handleChange = (e) => {
    const { value } = e.target
    setActiveColor(value)
    setColor(value)
  }

  return (
    <input
      type="text"
      className="color-input"
      placeholder='Type a color in the input'
      value={activeColor}
      onChange={handleChange}
    />
  )
}

export default Child
