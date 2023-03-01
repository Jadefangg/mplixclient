// importing scss file
import "./movie-view.scss";
// importing col component
// import { Col } from "react-bootstrap/Col";
export const MovieView = ({ movie, onMovieClick }) => {
    
return( 
<div>
    <div>
    <img clasName="w-100" src={movie.ImgURL} />
    </div>
    <div>
        <span>Title:</span>
        <span>{movie.Title}</span>
    </div>
    <div>
        <span>Director:</span>
        <span>{movie.Director}</span>
    </div>
    <div>
        <span>Genre:</span>
        <span>{movie.Genre}</span>
    </div>
    <button onMovieClick={onBackClick} className="back-button" style={{ cursor: "pointer"}}></button>
</div>
    );
};