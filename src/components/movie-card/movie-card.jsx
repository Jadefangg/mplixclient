import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Link from "react-router-dom";

// Movie card component
export const MovieCard = ({ movie}) => {
    return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.ImageURL}/> 
      <Card.Body className="movie-card">
            <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
              <br />
              {movie.Description}
              <br /><br />
              {movie.Director.Name} 
              <br /><br />
              {movie.Genre.Name} 
              </Card.Text>
              <br />
                <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                <Button className="movie-card-button" variant="link" active>Open</Button>
                </Link>
          </Card.Body>
  </Card>
    );
};

// defined props constrains for Movie Card
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    // Director: PropTypes.objectOf({
    //   Name: PropTypes.string,
    //   Bio: PropTypes.string,
    //   Birthdate: PropTypes.string,
    //   Deathdate: PropTypes.string
    //   }),
    // Genre: PropTypes.objectOf({
    //   Name: PropTypes.string,
    //   Description: PropTypes.string
    // })  
  }).isRequired
};
