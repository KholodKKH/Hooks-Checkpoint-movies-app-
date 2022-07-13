import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <Link to={`movie/${props.e.id}`} state={props.e}>
      <Card style={{ width: "22rem", margin: "20px" }}>
        <Card.Img
          variant="top{"
          src={props.e.imgsrc}
          style={{ height: "400px" }}
        />
        <Card.Body>
          <Card.Title>{props.e.name}</Card.Title>
          <Card.Text>{props.e.year}</Card.Text>
          <Rating rate={props.e.rating} />
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;