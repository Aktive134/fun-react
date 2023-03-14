import React, { useState } from 'react'

//Summary on useState
//when setting the initial value as an object, always get the previous object by copying it first *** ex.1
// and also any state that depends on the previous value, pass in a function in the useState to access
//the previous state **ex.2

export default function Home() {
  // const [ state, setState ] = useState({ count: 0, color: "blue" }); **ex.1
  // const count = state.count;
  // const color = state.color;

  const [count, setCount] = useState(0)
  // const [theme, setTheme ] = useState("blue");

  function increaseCount() {
    // setState(prevState => {
    //   return {...prevState, count: prevState.count + 1} **ex.1
    // })
    setCount((prevCount) => prevCount + 1) //**ex.2
  }
  function decreaseCount() {
    // setState(prevState => {
    //   return {...prevState, count: prevState.count - 1}
    // })
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
    <div style={{ marginLeft: "2rem"}}>
      <h2>Click the button</h2>
      <p>Demonstrates the basic form of useState</p>
    </div>
      <div className="button-container">
        <div className="cont-2">
          <button className="state-button" onClick={decreaseCount}>
            -
          </button>
          <h1>{count}</h1>
          <button className="state-button" onClick={increaseCount}>
            +
          </button>
        </div>
      </div>
    </>
  )
}
