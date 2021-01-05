import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-date-picker'
import useForm from './useForm'

const TaskForm = ({todos, setTodos}) => {
  const [dueDate, setDueDate] = useState(new Date());
  const uniqueRandom = require('unique-random');
  const random = uniqueRandom(1, 100);

  const { handleChange, values} = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { title: values.title,
        description: values.description,
        dueDate: dueDate,
        piority: values.piority ? values.piority : "Normal",
        completed: false,
        id: random() }
    ]);
    setDueDate(new Date());
    Object.keys(values).map((key, index) => values[key] = '')
  }

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        name="title"
        value={values.title}
        onChange={handleChange}
        placeholder="Add new task..." />
      <Form.Group controlId="description" className="pt-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={values.description}
          onChange={handleChange}
       />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="due-date">Due Date</Form.Label>
          <DatePicker
            onChange={setDueDate}
            value={dueDate}
            name="dueDate"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Piority</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Normal"
            name="piority"
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Normal</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="success" type="submit" className="btn-block">Add</Button>
    </Form>
  );
}

export default TaskForm
