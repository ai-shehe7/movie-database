// hooks
import { useState, useEffect } from "react";
// components 
import MovieCard from "./MovieCard";

export default function MovieList(props) {


    // make the a string into a title
    function formatTitle(title) {
        // console.log(title);
        let words = title.split("_");
        // console.log(words);
        words = words.map(word => capitalize(word));
        return words.join(" ").trim();
    }

    // capitalize the first letter in word
    function capitalize(str) {
        return str.slice(0,1).toUpperCase() + str.slice(1);
    }

    

    // console.log(movieData);

    
    const movieCardElements = props.movieList.map(movie => 
        <MovieCard
            key={movie.id} 
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
            movieInfo={movie}
        />
    );

    const listTitle = formatTitle(props.movieType);
    console.log(listTitle);

    return (
        <div className="genre-container">
            <div className="genre-info">
                <h2>{`${listTitle} Films`}</h2>
            </div>
            <div className="movie-list-container">
                {movieCardElements.splice(0,7)}
            </div>
        </div>
    );
}