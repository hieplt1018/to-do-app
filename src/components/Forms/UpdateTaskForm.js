import React, { useState } from 'react';
import './TaskForm.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-date-picker'

const UpdateTaskForm = ({todo, todos, setTodos}) => {
  const [todoUpdate, setTodoUpdate] = useState(todo);
  const [dueDate, setDueDate] = useState(todoUpdate.dueDate);

  const handleUpdate = (e) => {
    e.preventDefault();
    let updateTodos = todos;
    updateTodos = updateTodos.map(element => (element.id === todoUpdate.id) ? todoUpdate : element);
    setTodos(updateTodos);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setTodoUpdate({
      ...todoUpdate,
      [name]: value
    });
  }

  return (
    <Form className="p-3" onSubmit={handleUpdate}>
      <Form.Control
        type="text"
        name="title"
        value={todoUpdate.title}
        onChange={handleChange}
        placeholder="Add new task..." />
      <Form.Group controlId="description" className="pt-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          rows={3}
          name="description"
          value={todoUpdate.description}
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
            name="piority"
            onChange={handleChange}
            value={todoUpdate.piority}
          >
            <option>Low</option>
            <option>Normal</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="success" type="submit" className="btn-block">{'Update'}</Button>
    </Form>
  );
}

export default UpdateTaskForm
