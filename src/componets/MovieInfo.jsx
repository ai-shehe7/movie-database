// module
import dayjs from "dayjs";

export default function MovieInfo({movieDetails}) {
    
    // console.log(movieDetails.vote_average * 10);
    


    function formatReleaseDate() {
        const movieReleaseDate = movieDetails.release_date;
        const date = dayjs(movieReleaseDate);
        console.log(date.format("MMMM D, YYYY"));
        return date.format("MMMM D, YYYY");
    }



    return (
        <div className="movie-info-container">
            <h2>{movieDetails.title}</h2>
            <div className="movie-posters-container">
                <img 
                    src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} 
                    className="movie-poster"  
                />
                <img 
                    src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
                    className="movie-backdrop"
                />
            </div>
            <div className="text-info">
                <h3>Rating: {`${Math.round(movieDetails.vote_average * 10) / 10}/10`}</h3>
                <h3>Release Date: {formatReleaseDate()}</h3>
                <h3>Movie Description:</h3>
                <p className="movie-description">{movieDetails.overview}</p>
            </div>
        </div>
    );
}