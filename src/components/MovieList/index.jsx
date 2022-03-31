import React from "react";
import Movie from "../Movie";
import './style.css';


const MovieList = ( {movies} ) => {
    return (
        <>
    
        {
      movies.map(
        movieObject => <Movie
        key={movieObject.id}
        title={movieObject.title}
        poster={movieObject.poster}
        year={movieObject.year}
        rating={movieObject.rating}
        director={movieObject.director}
        genre={movieObject.genre}
        />
      )}


        </>
    )
};

export default MovieList;