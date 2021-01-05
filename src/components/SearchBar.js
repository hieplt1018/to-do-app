import React from 'react';
import Form from 'react-bootstrap/Form'

const SearchBar = () => {
  return (
    <Form className="pt-3 pb-3">
      <Form.Control type="text" placeholder="Search..." />
    </Form>
  );
}

export default SearchBar
