import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-date-picker'

const TaskForm = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Form className="p-3">
      <Form.Control type="text" placeholder="Add new task..." />
      <Form.Group controlId="description" className="pt-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="due-date">Due Date</Form.Label>
          <DatePicker
            onChange={onChange}
            value={value}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Piority</Form.Label>
          <Form.Control as="select" defaultValue="Normal">
            <option>Low</option>
            <option>Normal</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="success" className="btn-block">Add</Button>
    </Form>
  );
}

export default TaskForm
