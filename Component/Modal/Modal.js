import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Modal1(props) {
  const [show, setShow] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [img, setImg] = useState("");
  const [rating, setrating] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addbutton = (name, rating, imgsrc) => {
    props.setMoviedata([
      ...props.moviedata,
      {
        id: Math.random(),
        name: name,
        rating: rating,
        imgsrc: imgsrc,
      },
    ]);
    handleClose();
    setrating("");
    setImg("");
    setMovieName("");
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder="Enter Your Movie Name"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie Rate</Form.Label>
              <Form.Control
                type="Number"
                value={rating}
                onChange={(e) => setrating(e.target.value)}
                min={1}
                max={5}
                placeholder="Enter Your Movie Rate"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="Enter Your Movie Image"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => addbutton(movieName, rating, img)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal1;