import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TaskForm from './components/Forms/TaskForm'
import SearchBar from './components/SearchBar'
import Task from './components/Task'
import BulkAction from './components/BulkAction'

function App() {
  return (
    <Container className="p-3">
      <Row>
        <Col xs={4} className="border border-dark border-right-0 p-3 new-task">
          <h3 className="text-center"> New Task </h3>
          <TaskForm />
        </Col>
        <Col xs={8} className="border border-dark p-3 list-task">
          <h3 className="text-center"> Todo List </h3>
          <SearchBar />
          <Task />
          <BulkAction />
        </Col>
      </Row>
    </Container>
      );
}

export default App;
