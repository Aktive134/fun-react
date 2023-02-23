import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

// This BookLayout acts as a parent component to house several nested components,
// This is mainly useful when several nested components share a particular component or jsx, it is also ideal
// for navigation purpose, check *App.js* for its use case.

//UseSearchParams is use mainly when you want to carry out search or filter operations,
//it works like useState, here it stores the state of the query params. it is used to get search params from the url.

export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
  const number = searchParams.get('n')

  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New book</Link>
      <br />
      <Link to={`/books/${number}`}>New book {number}</Link>

      <Outlet context={{ code: 'Outlet context' }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />

      {/* The outlet component functions like the useContext, values can be passed 
        down through the components it houses..To make use of it, you call the method useOutletContext(), 
        check Book.js for example..
        It is also used to match the exact component when a layout is 
        used, like the bookLayout*/}
    </>
  )
}
