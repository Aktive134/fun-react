import React, { useState } from 'react'
import ShopChild from '../components/ShopChild'

export default function Shop() {
  const [boxTheme, setBoxTheme] = useState('')
  const getInputTheme = (colorTheme) => {
    setBoxTheme(colorTheme)
  }

  return (
    <div className="div__container">
      <div
        className="div__container--small"
        style={{ background: `${boxTheme}` }}
      ></div>
      <ShopChild getInputTheme={getInputTheme} />
    </div>
  )
}
