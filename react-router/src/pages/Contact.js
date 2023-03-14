import React, { useState } from 'react'
import Child from '../components/Child'
import '../App.css'
const Contact = () => {
  const [theme, setTheme] = useState(null)
  const setColor = (color) => {
    setTheme(color)
  }

  return (
    <div className="container-div">
      <div className="toggle-div" style={{ background: `${theme}` }}></div>
      <Child setColor={setColor} />
    </div>
  )
}

export default Contact