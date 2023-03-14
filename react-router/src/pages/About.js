import React, { useState, useEffect } from 'react'

//UseEffects are particularly used for side effects, and its a hook that re-renders a component
//based off a particular value.

export default function About() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  return (
    <>
      <div style={{ marginLeft: '2rem' }}>
        <h2>Click the button</h2>
        <p>Demonstrates the basic form of useEffect!</p>
      </div>
      <div className="button-container">
        <button className="res-button" onClick={() => setResourceType('posts')}>
          Posts
        </button>
        <button className="res-button" onClick={() => setResourceType('users')}>
          Users
        </button>
        <button
          className="res-button"
          onClick={() => setResourceType('comments')}
        >
          Comments
        </button>
      </div>
      <h3 style={{ color: 'black', marginLeft: '2rem' }}>{resourceType}</h3>
      <div style={{ width: "100vw", marginLeft: '2rem'  }}>
        {items.map((item) => {
          return <div style={{width: "100%" }} key={item.id}>
            <p>{item.title}</p>
          <br/>  </div>

        })}
      </div>
    </>
  )
}
