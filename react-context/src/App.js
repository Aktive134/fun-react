import React from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;
