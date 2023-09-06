import React, { useState } from "react"; 
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


// Movie card component
 function MovieCard ({ movies, movie, user, updateUser  }) {
  const [inFavoriteMovies, setInFavoriteMovies] = useState(user && user.FavoriteMovies.includes(movie._id));
  const token = window.localStorage.getItem("token");
  // add Fav Movie function
  const addFavoriteMovie = () => {
    fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/favMovies/${movie._id}`, {
    method: "POST",
    headers: {Authorization: `Bearer ${token}`}
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed adding the Movie to Favorite Movies");
          return false;
        }
      })
      .then(user => {
        if(user) {
          alert("Movie added to Favorite Movies");
          setInFavoriteMovies(true);
          updateUser(user);
        }
      })
      .catch(e => {
        alert(e);
        console.log(e);
      });
  }    
  // Remove-favMovies
  const removeFavoriteMovie = () => {
    fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/favMovies/${movie._id}`, {
      method: "DELETE",
      headers: {Authorization: `Bearer ${token}`} 
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Failed removing movie from Favorite list");
        return false;
      }
    })
    .then(user => {
      if(user) {
        alert("Movie deleted from Favorite Movies");
        setInFavoriteMovies(false);
        updateUser(user);
      }
    })
    .catch(e => {
      console.log(e);
      alert(e);
    });
  }
  
  return (
      <Card className="movie-card" style={{ width:"18rem"}}>
        <Card.Img variant="top" src={movie.ImageURL} alt="movie-poster"/> 
        <Card.Body className="movie-card-body">
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
                <br /><br />
                {movie.Director.Name} 
                <br /><br />
                {movie.Genre.Name} 
              </Card.Text>
                <br />
                  <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                  <Button className="movie-card-button" variant="outline-warning">Open</Button>
                  <br/> <br/>
                  {inFavoriteMovies ? <Button onClick={(e) => {
                    e.preventDefault();
                    removeFavoriteMovie(movie._id);
                  }} 
                  className="movie-card-button" variant="outline-warning"
                  >Remove from Favorite Movies</Button> :
                  <Button onClick={(e) => {
                    e.preventDefault();
                    console.log(movie._id); 
                    addFavoriteMovie(movie._id);
                  }}  
                  className="movie-card-button" variant="outline-warning"
                  >Add to Favorite Movies</Button>
                  }
                  </Link>
            </Card.Body>
      </Card>
    );
    

}

export { MovieCard };

// defined props constrains for Movie Card
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.object,
    Genre: PropTypes.object,
    _id: PropTypes.string
  }).isRequired,
  user: PropTypes.object,
  addFavoriteMovie: PropTypes.func,
  removeFavoriteMovie: PropTypes.func,
  updateUser: PropTypes.func,
  movies: PropTypes.array
};