// importing scss file
import "./movie-view.scss";
// importing col component
// import { Col } from "react-bootstrap/Col";
export const MovieView = ({ movie, onBackClick }) => {
    
return( 
<div className="movies-couch">
    <div>
    <img className="w-100" src={movie.ImgURL} />
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
    <button onClick={onBackClick} className="back-button" style={{ cursor: "pointer"}}>Back</button>
</div>
    );
};