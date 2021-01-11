import React from 'react';
import './BulkAction.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const BulkAction = ({setTodos, todos}) => {
  const removeAllHandler = () => {
    setTodos(todos.filter((element) => element.completed !== true));
  };

  return (
    <div className="bulk-action p-3">
      <Row>
        <p className="ml-3 mt-3"> BulkAction </p>
        <div className="bulk-btn">
          <Button variant="primary" className="btn btn_done mr-3">Done</Button>
          <Button onClick={removeAllHandler} variant="danger" className="btn btn_remove_checked">Remove</Button>
        </div>
      </Row>
    </div>
  );
}

export default BulkAction;
