import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

// Movie card component
function MovieCard({ movie, user, updateUser }) {
  const [inFavorite, setInFavorite] = useState(user.FavoriteMovies.includes(movie._id));
  const token = window.localStorage.getItem("token");

  const addFavorite = () => {
    fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movie._id}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then(user => {
        if (user) {
          alert("Movie added to favorites");
          setInFavorite(true);
          updateUser(user);
        }
      })
      .catch(e => {
        alert(e);
      });
  }

  const removeFavorite = () => {
    fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movie._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then(user => {
        if (user) {
          alert("Movie deleted from favorites");
          setInFavorite(false);
          updateUser(user);
        }
      })
      .catch(e => {
        alert(e);
      });
  }

  return (
    <Card className="movie-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.ImageURL} alt="movie-poster" />
      <Card.Body className="movie-card-body">
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Genre.Name}
        </Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button className="movie-card-button" active>Open</Button>
          <br /> <br />
          {inFavorite ? <Button
            onClick={(e) => {
              e.preventDefault();
              removeFavorite(movie._id);
            }}
            className="movie-card-button"
          >
            Remove from Favorite</Button>
            : <Button
              onClick={(e) => {
                e.preventDefault();
                console.log(movie._id);
                addFavorite(movie._id);
              }}
              className="movie-card-button"
            >
              Add to Favorite</Button>
          }
        </Link>
      </Card.Body>
    </Card>
  );


};

export { MovieCard };

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
