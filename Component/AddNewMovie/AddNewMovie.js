import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { Button } from "react-bootstrap";
import "./AddNewMovie.css";

function AddNewMovie() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mov">
      <img src={location.state.imgsrc} alt="test"></img>
      <h1 style={{ color: "#FFB30F" }}>{location.state.name} </h1>
      <Rate disabled defaultValue={location.state.rating} />
      <h5 style={{ color: "#F1FFFA" }}>{location.state.descrption}</h5>

      <iframe width="853" height="480" src={location.state.trailer}
      title={location.state.name}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen 
      >
      </iframe>
     
        <div className="button">
        <Button
          style={{ color: "white" }}
          variant="success"
          onClick={() => navigate("/")}>
          Go Back
        </Button>{" "}
      </div>
    </div>
  );
}

export default AddNewMovie;