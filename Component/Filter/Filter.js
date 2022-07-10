import React from "react";
import FilterByTitle from "./FilterByTitle";
import FilterByRating from "./FilterByRating";
import "./Filter.css";
function Filter(props) {
  return (
    <div className="filter">
      <FilterByTitle name={props.name} setName={props.setName} />
      <FilterByRating rate={props.rate} setRate={props.setRate} />
    </div>
  );
}

export default Filter;