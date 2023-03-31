import React from 'react'
import { Table, Button } from 'react-bootstrap'
import Employees from '../components/Employees'
import { Link, useNavigate } from 'react-router-dom'

function EmployeePortal() {
  let navigate = useNavigate()
  const handleDelete = (id) => {
    let index = Employees.map(function (e) {
      return e.id
    }).indexOf(id)
    Employees.splice(index, 1)
    navigate('/employees')
  }
  const handleEdit = (name, age) => {
    localStorage.setItem('Name', name)
    localStorage.setItem('Age', age)
  }

  return (
    <>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={`/edit-employee/${item.id}`}>
                          <Button
                            className="me-2"
                            onClick={() => handleEdit(item.Name, item.Age)}
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })
              : 'Employees not available'}
          </tbody>
        </Table>
        <br />
        <Link to="/create-employee">
          <Button variant="success">CREATE</Button>
        </Link>
      </div>
    </>
  )
}

export default EmployeePortal
