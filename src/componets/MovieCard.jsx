// components
import { Link } from "react-router-dom";

// hooks
import { useState } from "react";

export default function MovieCard(props) {
    
   // console.log(props.movieInfo);

    return (
        <Link className="link" 
            to={`/movie/${props.movieInfo.id}`}
            state={{movieInfo: props.movieInfo}}    
        >
            <div className="movie-card-container">
                <img className="poster" src={props.src}/>
                <div className="movie-info">
                    <p className="title">{props.title}</p>
                    <p className="year-released">{props.releaseDate.slice(0, 4)}</p>
                </div>
            </div>
        </Link>
    );
}