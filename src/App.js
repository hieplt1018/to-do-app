import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TaskForm from './components/Forms/TaskForm'
import SearchBar from './components/SearchBar/SearchBar.js'
import BulkAction from './components/BulkAction/BulkAction.js'
import TodoList from './components/TodoList/TodoList.js'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Container className="p-3">
      <Row>
        <Col xs={4} className="border border-dark border-right-0 p-3 new-task">
          <h3 className="text-center"> New Task </h3>
          <TaskForm
            todos={todos}
            setTodos={setTodos}
          />
        </Col>
        <Col xs={8} className="border border-dark p-3 list-task">
          <h3 className="text-center"> Todo List </h3>
          <SearchBar />
          <TodoList setTodos={setTodos} todos={todos} />
          <BulkAction />
        </Col>
      </Row>
    </Container>
      );
}

export default App;
