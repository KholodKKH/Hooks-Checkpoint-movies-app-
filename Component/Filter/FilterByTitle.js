import React from "react";
import { Form } from "react-bootstrap";
function FilterByTitle(props) {
  return (
    <div>
      <Form style={{ width: "600px" }}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            placeholder="Enter Your Movie Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      </Form>
    </div>
  );
}

export default FilterByTitle;