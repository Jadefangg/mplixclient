// importing scss file
import "./movie-view.scss";
// importing Card component
import { Button, Card } from "react-bootstrap";
export const MovieView = ({ movie, onBackClick }) => {
    
return( 
<Card className="movies-couch">
    <Card.Img className="h-80" src={movie.ImgURL} />
    <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <hr/>
        <Card.Text>     
        {movie.Director.Name}
        <hr/>
        {movie.Director.Bio}
        <hr/>
        {movie.Director.Birthdate}
        <hr/>
        {movie.Genre.Name}
        <hr/>
        {movie.Genre.Description}
        </Card.Text>
        <Button onClick={onBackClick} className="back-button" style={{ cursor: "pointer"}}>
            Back
        </Button>
    </Card.Body>
</Card> 

    );
};