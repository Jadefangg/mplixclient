import React from "react"; 
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

// Movie card component
 function MovieCard ({ movie, removeFavMovie  }) {
  

  return (
      <Card className="movie-card">
        <Card.Img variant="top" src={movie.ImageURL} alt="movie-poster"/> 
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
                  <Button className="movie-card-button" active>Open</Button>
                  <br/> <br/>
                  <Button 
                  onClick={function (event) {event.preventDefault();
                    removeFavMovie(movie._id);
                  }} className="movie-card-button">Remove from Favorite List</Button> 
                  </Link>
            </Card.Body>
      </Card>
    );
    

};

export {MovieCard};

// defined props constrains for Movie Card
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.object,
    Genre: PropTypes.object
    }).isRequired
};
