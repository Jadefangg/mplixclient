import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function FavoriteMovies({favoriteMovies}) {
    
    return(
        <>
            <Row>
                <Col xs={2} sm={4}>
                <h4>Favorite Movies</h4>
                </Col>
                </Row>
                <Row>
                {favoriteMovies.map((ImageURL, _id, Title) => {
                    return(
                    <Col key={_id}>
                    <img src={ImageURL}/>
                    <Link href={`/movies/${movies._id}`}>
                        <h4>{Title}</h4>
                    </Link>
                    <Button  onClick={() => removeFavMovie(movie._id)}>Remove from List</Button> 
                    </Col> 
                )}
                )}
            </Row>
        </>
    )
} 

export default FavoriteMovies