import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const BulkAction = () => {
  return (
    <div className="bulk-action p-3">
      <Row>
        <p className="ml-3 mt-3"> BulkAction </p>
        <div className="bulk-btn">
          <Button variant="primary" className="btn btn_done mr-3">Done</Button>
          <Button variant="danger" className="btn btn_remove">Remove</Button>
        </div>
      </Row>
    </div>
  );
}

export default BulkAction;
