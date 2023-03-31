import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Employees from './Employees'

function EditEmployee() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  const index = Employees.map((e) => {
    return e.id
  }).indexOf(id)

  useEffect(() => {
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))
  }, [])

  const updateEmployeeHandler = (e) => {
    e.preventDefault()
    const employee = Employees[index]
    employee.Age = age
    employee.Name = name

    navigate('/employees')
  }

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '7rem' }}>
        <Form.Group className="mb-3 w-50" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            required
          />
        </Form.Group>
        <Button
          type="submit"
          className="w-50"
          onClick={(e) => updateEmployeeHandler(e)}
          variant="primary"
        >
          EDIT EMPLOYEE
        </Button>
      </Form>
    </div>
  )
}

export default EditEmployee
