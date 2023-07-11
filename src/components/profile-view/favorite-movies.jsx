import React from "react";
import { Col } from "react-bootstrap";
import PropTypes  from "prop-types";
import { MovieCard } from "../movie-card/movie-card";

function FavoriteMovies({ movies, removeFavMovie, user }) {
    let favoriteMovies = movies.filter(function (movie) {
        return user.FavoriteMovies.includes(movie._id);
    }); 
    let printFavoriteMovies;
    
    if (favoriteMovies.length === 0) {
        printFavoriteMovies = (
            <Col className="mt-4">You have not added movies yet.</Col>
        );
    } else {
        printFavoriteMovies = favoriteMovies.map(function(movie) {
            return (
                <Col className="mt-4"  id={movie._id} xs={6} md={4} lg={3} xl={2}>
                        <MovieCard 
                        movie={movie}
                        user={user}
                        removeFavMovie={removeFavMovie} />
                </Col>
            )
        })
    }
    
    return (
        <div >
            {printFavoriteMovies}
        </div>
    )

} 

export { FavoriteMovies };

FavoriteMovies.propTypes = {
    user: PropTypes.object,
    movies: PropTypes.array,
    removeFavMovie: PropTypes.func,
    _id: PropTypes.string,
}
// have a look on Prop-> which causes the add fav button not 