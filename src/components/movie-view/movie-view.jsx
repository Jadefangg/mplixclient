import { React, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link, Navigate } from "react-router-dom"; //Redirect
import "./movie-view.scss";

export const MovieView = ({ movies, token }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m._id === movieId);
    const [ showDescription, setShowDescription] = useState(false);

    if (!movie) {
        // if movie is not found return to homepage
        return <Navigate replace to="/" />;
    }
    // functionality to description-button  
  const handleClickShowDescription = () => {
    setShowDescription(!showDescription);
  };

    return (
        <Card className="movie-view" style={{background:"transparent", display:"flex", flexDirection:"row"}}>
            <Card.Img className="w-80" style={{width:"350px", borderRadius:"10px", alignSelf: "start"}} src={movie.ImageURL} alt="movie-poster" />
            <Card.Body className="movie-view">
                <Card.Title>{movie.Title}</Card.Title>
                <br />
                <Card.Text> Director:
                    {` ${movie.Director.Name}`}
                    <br /> <br />
                    About: {` ${movie.Director.Bio}`}
                    <br /> <br />Birthdate:
                    {` ${movie.Director.Birthdate}`}
                    <br /> <br />Genre:
                    {` ${movie.Genre.Name}`}
                    <br /> <br />Actors:
                    {` ${movie.Actors}`}
                    <br /> <br />
                    <div className="showDescription">
                        <Button onClick={handleClickShowDescription} variant="outline-warning">
                            {showDescription ? "Hide Description" : "Show Description"}
                        </Button>
                        <br/><br/>
                        {showDescription && <p>{movie.Description}</p>}
                    </div>
                </Card.Text>
                <br />
                <Link to={"/"}>
                    <Button className="back-button" variant="outline-warning">Back</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

MovieView.prototype = {
    movies: PropTypes.array,
    favoriteMovies: PropTypes.array,
    addFavMovie: PropTypes.func,
    token: PropTypes.string
}