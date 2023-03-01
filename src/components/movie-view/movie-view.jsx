import "./movie-view.scss";
// import Col from "react-bootstrap/Col";
export const MovieView = ({ movie, onMovieClick }) => {
    
return( 
<Col md={6} style={{border: "1px solid grey"}}>
<MovieView style={{ border: "1px solid green"}}
movie={selectedMovie}
onMovieClick={() => setSelectedMovie(null)} 
img={100}
/>
</Col>
    );
};