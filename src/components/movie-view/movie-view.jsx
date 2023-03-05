// importing scss file
import "./movie-view.scss";
// importing Card component
import { Button, Card } from "react-bootstrap";
export const MovieView = ({ movie, onBackClick }) => {
    
return( 
<Card className="movie-view">
    <Card.Img className="w-80" src={movie.ImageURL} />
    <Card.Body className="movie-view">
        <Card.Title>{movie.Title}</Card.Title>
        <br />
        <Card.Text>     
         {movie.Director.Name} 
        <br /> <br />
        {movie.Director.Bio}
        <br /> <br />
        {movie.Director.Birthdate}
        <br /> <br />
        {/* {movie.Genre.Name} */}
        {/* <br /> <br /> */}
        {/* {movie.Genre.Description} */} 
        </Card.Text>
        <Button onClick={onBackClick} className="back-button" style={{ cursor: "pointer"}}>
            Back
        </Button>
    </Card.Body>
</Card> 

    );
};