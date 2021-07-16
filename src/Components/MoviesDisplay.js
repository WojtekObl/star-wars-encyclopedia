import React from "react";
import Movie from "./Movie";
import MoviesDB from "../Assets/data.json";

function MoviesDisplay() {
  const moviesToDisplay = MoviesDB.data.films;

  return (
    <div className="movies-display" style={{ width: "100%" }}>
      {moviesToDisplay.map((movie) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
}

export default MoviesDisplay;
