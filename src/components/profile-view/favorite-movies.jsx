import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function FavoriteMovies({favoriteMovieList}) {
    
    return(
        <>
            <Row>
                <Col xs={2} sm={4}>
                <h4>Favorite Movies</h4>
                </Col>
                </Row>
                <Row>
                {favoriteMovieList.map((map) => {
                    return(
                    <Col _id={movies._id}>
                    <img src={movies.ImageURL}/>
                    <Link href={`/movies/${movies._id}`}>
                        <h4>{movies.Title}</h4>
                    </Link>
                    <Button variant="button" onClick={() => removeFav(movies._id)}>Remove from List</Button> 
                    </Col> 
                )}
                )}
            </Row>
        </>
    )
} 

export default FavoriteMovies