import React, { createContext } from 'react'

const PracticeContext = createContext()

const PracticeStore = ({ children }) => {
  return (
    <PracticeContext.Provider value={"yooo"}>{children}</PracticeContext.Provider>
  )
}

export default PracticeStore