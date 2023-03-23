import React from "react"; 
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

// Movie card component
export const MovieCard = ({ user, token, movie, favoriteMovies  }) => {
  function addMovie(){
    const user = localStorage.getItem("user");
    console.log(user);
    const token = localStorage.getItem("token");
    console.log(token);
    axios.post(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movie._id}`,
    {header: {Authorization: `Bearer ${token}`}}
    ) 
    .then((response) => {
        console.log(response);
        alert(`The Movie: ${movie._id} was added to Favorite List`)
    })
    .catch(function (error) {
        console.log(error);
    })
    favoriteMovies.add();
  } //useEffect?

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
                  <Button onClick={addMovie} className="movie-card-button">Add to Favorite List</Button> 
                  </Link>
            </Card.Body>
      </Card>
    );
    // Button-fav mov-> needs function
    // query to add in the backend? 
    // let similarMovies = movies.filter((movie) => movie.Genre.Name === Genre.Name && movie._id !== _id);
    // console.log(similarMovies);

};

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
