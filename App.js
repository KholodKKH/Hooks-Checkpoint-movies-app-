
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
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
import AddNewMovie from "./Component/AddNewMovie/AddNewMovie";

var moviedata1 = [
  { id: Math.random(), name: "DON'T BREATHE2", rating: 4, imgsrc: a,
  descrption:"Hiding out for years in an isolated cabin, Norman Nordstrom has taken inand raised a young girl orphaned from a house fire. Their quiet existence is shattered when a group of kidnappers show up and take the girl, forcing Norman to leave his safe haven to save her.",
  trailer:"https://www.youtube.com/embed/gRbG2tjHYCA", },

  { id: Math.random(), name: "LOGAN", rating: 5, imgsrc: b,
  descrption:"In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
  trailer:"https://www.youtube.com/embed/Div0iP65aZo", },

  { id: Math.random(), name: "FANTASTIC BEASTS", rating: 3, imgsrc: c,
  descrption:"Set in 1927, it follows Newt Scamander and Albus Dumbledore as they attempt to take down the dark wizard Gellert Grindelwald while facing new threats in a more divided wizarding world.",
  trailer:"https://www.youtube.com/embed/vvFybpmyB9E", },

  { id: Math.random(), name: "DOWNTOWN ABBEY", rating: 4, imgsrc: d,
  descrption:"The Crawley family goes on a grand journey to the South of France to uncover the mystery of the dowager countess's newly inherited villa.",
  trailer:"https://www.youtube.com/embed/wN0Spmq610Q", },


  { id: Math.random(), name: "DUNE", rating: 2, imgsrc: e,
  descrption:"A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
  trailer:"https://www.youtube.com/embed/n9xhJrPXop4", },

  {id: Math.random(), name: "BULLET TRAIN",rating: 4, imgsrc: f,
  descrption:"Five assassins aboard a fast moving bullet train find out their missions have something in common.",
  trailer:"https://www.youtube.com/embed/0IOsk2Vlc4o", },

  { id: Math.random(), name: "MOON KNIGHT", rating: 3, imgsrc: g,
  descrption:"Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.",
  trailer:"https://www.youtube.com/embed/x7Krla_UxRg",},

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
      <Routes>
        <Route
          path="/"
          element={<MovieList name={name} rate={rate} moviedata={moviedata} />}
        />
        <Route path="movie/:id" element={<AddNewMovie />} />
      </Routes>
    </div>
  );
}

export default App;