
// importing Card component
import { Button, Card } from "react-bootstrap";
// Params
import { useParams } from "react-router";
import Link from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
    const {movieId} = useParams();
    const movie = movies.find((m) => m._id === movieId);
return( 
<Card className="movie-view">
    <Card.Img className="w-80" src={movie.ImageURL} />
    <Card.Body className="movie-view">
        <Card.Title>{movie.Title}</Card.Title>
        <br />
        <Card.Text> Director:      
         {' ' + movie.Director.Name} 
        <br /> <br />
        About: {' ' +movie.Director.Bio}
        <br /> <br />Birthdate: 
        {' ' + movie.Director.Birthdate}
        <br /> <br />Genre: 
        {' ' + movie.Genre.Name}
        </Card.Text>
        <br />
        <Link to={"/"}>
        <Button className="back-button" style={{ cursor: "pointer"}} active>Back</Button>
        </Link>
    </Card.Body>
</Card> 

    );
};