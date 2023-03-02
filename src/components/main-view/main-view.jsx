//importing other components
import { useState, useEffect } from "react";
// importing Moviecard-component
import { MovieCard } from "../movie-card/movie-card";
//importing Movieview componentS
import { MovieView } from "../movie-view/movie-view"; 
// importing Login View
import { LoginView } from "../login-view/login-view";
// importing Signup View
import { SignupView } from "../signup-view/signup-view";
// importing breaking points
import ThemeProvider from "react-bootstrap/ThemeProvider";
// importing container feature
import Container from "react-bootstrap/Container";
// importing row feature
import Row   from "react-bootstrap/Row";
// importing col feature
import Col from "react-bootstrap/Col";

// exporting Main view variabels
export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

useEffect(() => {
    //verifying token-authentication to access request
    if(!token) {
        return;
    }
            
    fetch("https://movies-couch-api.vercel.app/movies", {
    headers: {Authorization: `Bearer ${token}`}, 
    	})
    .then((response) => response.json())
    .then((movies) => {
        console.log(movies); 
        const moviesFromApi = movies.map((movie) => {
            console.log(Object.keys(movies))
            return {
                _id: movie.key,
                Title: movie.Title,
                Image: movie.ImageURL, 
                Director: movie.Director,
                Genre: movie.Genre
            };    
        });
        console.log(moviesFromApi[0])
        setMovies(moviesFromApi); 
    });
}, []); //[token]
 
return ( //<Container> -> is rendering issues & I do not know why
<ThemeProvider  breakpoints={["xxl","xl","lg","md","sm","xs"]}
    minBreakpoint="xs">
    <Row  className="justify-content-md-center" >
        {!user ? (
            <Col md={5}>
            <LoginView onLoggedIn={(user) => setUser(user)} />
            or
            <SignupView />
            </Col>
        // display movie-view when movie is selected- ternary operator
        ): selectedMovie ? (
            <Col md={6}>
            <MovieView 
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
            />
            </Col>
            ): movies.length === 0 ? (
                <div>The list is empty!</div>
            ): ( // display movie-card with logout button, if user does not select a movie
                <>
                {movies.map((movie) => (
                <Col className="mb-5" key={movie._id} md={4}>
                 <MovieCard  movie={movie} 
                 onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                }} 
                />
                </Col>
            ))}
                {/* <Button onClick={() => { setUser(null); }}>Logout</Button> */}
                </>

            )}
    </Row>
</ThemeProvider>
    );
};

