// components 
import { Link } from "react-router-dom";

// images
import film from "../assets/film.png";
import popcorn from "../assets/popcorn.png";

export default function Header() {
    return (
        <header>
            <div className="header-section">
                <Link style={{backgroundColor: "black",}} className="header-link" to="/">
                    <div className="header-title-container">
                        <img className="header-image" src={film} alt="film icon"/>
                        <h1 className="header-title">Movie Database Site</h1>
                        <img className="header-image" src={popcorn} alt="popcorn icon" />
                    </div>
                </Link>
                
                <Link to="/search">
                    <button className="button search-button">Search</button>
                </Link>
                
            </div>
        </header>
    );
}