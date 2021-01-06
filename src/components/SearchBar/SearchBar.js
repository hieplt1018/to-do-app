import React from 'react';
import Form from 'react-bootstrap/Form'

const SearchBar = ({ filterText, setfilterText }) => {

  const handleFilterTextChange = (e) => {
    setfilterText(e.target.value);
  };

  return (
    <Form className="pt-3 pb-3">
      <Form.Control
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
    />
    </Form>
  );
}

export default SearchBar
