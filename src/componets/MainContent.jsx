// hooks
import { useEffect, useState } from "react";
// components
import MovieList from "./MovieList";

export default function MainContent() {
    
    // states
    const [movieData, setMovieData] = useState({});
    let count = 0; // used for giving keys to MovieLists components


    /* -------------------------- home page ------------------------------------------------ */

    const movieListTypes = [ "trending", "popular", "top_rated", "upcoming", "now_playing"];

    useEffect(() => {

        for (let i = 0; i < movieListTypes.length; i++) {
            let url = "";
            
            if (movieListTypes[i] === "trending") {
                url = 'http://localhost:5000/api?page=main&type=trending';
            } else {
                url = `http://localhost:5000/api?page=main&type=${movieListTypes[i]}`;
            }

            fetch(url)
                .then(res => {
                    console.log(res.ok)
                    return res.json()
                })
                .then(data => setMovieData(prevData => {
                    console.log(data.results)
                    prevData[movieListTypes[i]] = data.results
                    console.log("movies")
                    // console.log(prevData)
                    return {...prevData}
                }))
                .catch(err => console.error(err));
                console.log("ok");

        }
            
    }, []);


    console.log("rendered");
            


    console.log(movieData);



    return (
        <main>
            {
                Object.keys(movieData).length ? movieListTypes.map(movieListType => 
                    movieData[movieListType] &&
                    <MovieList
                        key={count++}
                        movieType={movieListType} 
                        movieList={movieData[movieListType]}
                    />)
                : undefined
            }
        </main>
    );
}