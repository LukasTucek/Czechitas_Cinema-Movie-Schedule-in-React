import React from "react";
import './style.css';

const Movie = ( { title, poster, year, rating, director, genre } ) => {
    return (

        <div className="movie-table">
                <h2>Název filmu: {title}</h2>
                <img className="poster" src={`./assets/${poster}`}></img>
                <p>Rok vydání: {year}</p>
                <p className="rating">Hodnocení: {rating}</p>
                <p>Režisér: {director}</p>
                <p>Žánr: {genre}</p>
        </div>
        

);
}

export default Movie;

