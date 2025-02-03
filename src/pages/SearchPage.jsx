// hooks
import { useEffect, useState } from "react";
// components
import MovieCard from "../componets/MovieCard";

export default function SearchPage() {

    const[movies, setMovies] = useState([]);

    const[displayedMovies, setDisplayedMovies] = useState([]);

    useEffect(() => {

          for (let i = 1; i < 26; i++) {
            fetch(`http://localhost:5000/api?page=search&pageNum=${i}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setMovies(prevData => prevData.concat(data.results))
                console.log(movies)
            })
            .catch(err => console.error(err));
          }
        
          console.log(movies.length);
    }, []);

    function handleKeyDown(event) {

        if (event.key === "Enter") {
            const {value} = event.currentTarget;
            console.log(value);


            const foundMovies = findMovies(value);
            console.log(foundMovies);

            setDisplayedMovies(foundMovies);
        }

    }

    function findMovies(movieName) {
        let movieList = [];
        if (movieName !== "") {
            movies.forEach(movieObj => {
                if (movieObj.title.toLowerCase().indexOf(movieName.toLowerCase()) > -1) {
                    movieList.push(movieObj);
                }
            });
        }
        return movieList;
    }

    return (
        <>
            {
              movies.length  && 

              <div className="search-page">
                <div className="search-bar">
                    <label className="search-label">Search Movies:</label>
                    <input className="movie-search-input" type="search"
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="search-grid" style={displayedMovies.length ? {padding: "15px", borderRadius: "20px"} : undefined}>
                    {
                       displayedMovies.length ? displayedMovies.map((movie, i) => 
                            <MovieCard
                                key={i} 
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                movieInfo={movie}
                            />
                        ) : undefined
                    }
                </div>
              </div>
                
              /*
              <div>
                <h2>{movies[0].title}</h2>
                <img src="" />
              </div>
              */
            }
        </>
    );
}