//importing PropTypes library
import PropTypes from "prop-types";
// Movie card function component
export const MovieCard = ({ movie, onMovieClick}) => {
    return (
    <div 
        onClick={() => {
        onMovieClick(movie);
    }}
      >
       {movie.Title}
      </div>
    );
};
//Similar-Movie Component:

// defined props constrains for Movie Card
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Image: PropTypes.string,
    Director: PropTypes.shape ({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birthyear: PropTypes.date,
      Deathyear: PropTypes.date
      }),
    Genre: PropTypes.shape ({
      Name: PropTypes.string,
      Description: PropTypes.string
    })
  }),
  onMovieClick: PropTypes.func.isRequired
};
