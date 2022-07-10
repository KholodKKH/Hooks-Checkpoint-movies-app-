import React from "react";
import MovieCard from "./MovieCard";
import "./MovieCard.css";

function MovieList(props) {
  return (
    <div className="cards">
      {props.moviedata
        .filter((e) => e.name.toLowerCase().includes(props.name.toLowerCase()))
        .filter((e) => e.rating >= props.rate)
        .map((e, id) => (
          <MovieCard e={e} key={e.id} />
        ))}
    </div>
  );
}

export default MovieList;