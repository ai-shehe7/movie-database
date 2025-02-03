// hooks
import { useLocation } from "react-router-dom";
// components
import MovieInfo from "../componets/MovieInfo";



export default function MoviePage() {
    
    const location = useLocation();
    console.log(location.state);
    
    return (
        <div className="movie-page-container">
            <MovieInfo 
                movieDetails={location.state.movieInfo}
            />
        </div>
    );
}