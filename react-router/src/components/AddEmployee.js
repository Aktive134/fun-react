import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Employees from './Employees'

function AddEmployee() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  const addEmployeeHandler = (e) => {
    e.preventDefault()
    const ids = uuid()
    let uniqueId = ids.slice(0, 8)
    let a = age,
      b = name
    Employees.push({ id: uniqueId, Name: b, Age: a })
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
          onClick={(e) => addEmployeeHandler(e)}
          variant="primary"
        >
          ADD EMPLOYEE
        </Button>
      </Form>
    </div>
  )
}

export default AddEmployee
