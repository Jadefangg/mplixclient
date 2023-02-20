export const MovieView = ({ movie, onMovieClick }) => {
return( 
<div>
        <div> 
            <img src={movie.Image} />
        </div>
        <div>
            <span>Title:</span>
            <span> {movie.Title} </span>
        </div>
        <div>
            <span>Director:</span>
            <span> {movie.Director}</span>
        </div>
        <button onClick={onMovieClick}>Back</button>
</div>
    );
};