import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Nav from './pages/Nav'
import About from './pages/About'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BookLayout from './Layout/BookLayout'
import Contact from './pages/Contact'
import EmployeePortal from './pages/EmployeePortal'
import EditEmployee from './components/EditEmployee'
import AddEmployee from './components/AddEmployee'
import Search from './pages/Search'
import Shop from './pages/Shop'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/employees" element={<EmployeePortal />} />
        <Route path="/create-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* Incase you dont want to nest your routes as above, you can use the syntax below */}
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/book/new" element={<NewBook />} /> */}
      </Routes>
    </>
  )
}

export default App
