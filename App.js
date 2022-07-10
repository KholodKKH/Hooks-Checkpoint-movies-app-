
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import a from "./images/a.webp";
import b from "./images/b.webp";
import c from "./images/c.webp";
import d from "./images/d.webp";
import e from "./images/e.webp";
import f from "./images/f.webp";
import g from "./images/g.webp";
import MovieList from "./Component/MovieList";
import Filter from "./Component/Filter/Filter";
import Modal1 from "./Component/Modal/Modal";
import { useState } from "react";

var moviedata1 = [
  { id: Math.random(), name: "DON'T BREATHE2", rating: 4, imgsrc: a },
  { id: Math.random(), name: "LOGAN", rating: 5, imgsrc: b },
  { id: Math.random(), name: "FANTASTIC BEASTS", rating: 3, imgsrc: c },
  { id: Math.random(), name: "DOWNTOWN ABBEY", rating: 4, imgsrc: d },
  { id: Math.random(), name: "DUNE", rating: 2, imgsrc: e },
  {
    id: Math.random(),
    name: "BULLET TRAIN",
    rating: 4,
    imgsrc: f,
  },
  { id: Math.random(), name: "MOON KNIGHT", rating: 3, imgsrc: g },
];
function App() {
  const [moviedata, setMoviedata] = useState(moviedata1);

  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      <div className="hed">
        <Filter name={name} setName={setName} rate={rate} setRate={setRate} />
        <Modal1 moviedata={moviedata} setMoviedata={setMoviedata} />
      </div>
      <MovieList name={name} rate={rate} moviedata={moviedata} />
    </div>
  );
}

export default App;