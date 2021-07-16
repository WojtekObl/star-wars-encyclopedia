import React from "react";
import Movie from "./Movie";
import MoviesDB from '../Assets/data.json' 

const films= MoviesDB.data.films

function MoviesDisplay() {
  return (
    <div className="movies-display" style={{"width": "100%"}}>
      {films.map((movie) => (
         <Movie key={movie.id} id={movie.id} title={movie.title}/>
      ))}
    </div>
  );
}

export default MoviesDisplay;
