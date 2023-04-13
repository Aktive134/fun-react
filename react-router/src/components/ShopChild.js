import React, { useState } from 'react'

function ShopChild({ getInputTheme }) {
  const [inputTheme, setInputTheme] = useState('')
  const activeColor = (e) => {
    const { value } = e.target
    setInputTheme(value)
    getInputTheme(value)
  }

  return (
    <>
      <input
        className="input__theme"
        type="text"
        value={inputTheme}
        onChange={(e) => activeColor(e)}
        placeholder="input a color"
      />
    </>
  )
}

export default ShopChild
