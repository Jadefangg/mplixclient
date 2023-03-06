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
// importing row feature
import Row   from "react-bootstrap/Row";
// importing col feature
import Col from "react-bootstrap/Col";
// importing NavigationBar
import { NavigationBar } from "../navigation-bar/navigation-bar";
// importing components for nagivation
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// exporting Main view variabels
export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    
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
            // console.log(Object.keys(movies))
            return {
                _id: movie.key,
                Title: movie.Title,
                ImageURL: movie.ImageURL, 
                Description: movie.Description, 
                Director: movie.Director,
                Genre: movie.Genre
            };    
        });
        console.log(moviesFromApi[0])
        setMovies(moviesFromApi); 
        // let similarMovies = movies.filter(movie.Genre.Name === Genre.Name && movie._id !== _id);
        // console.log(similarmovies);
        // or
        // let similarMovies = movies.filter((m) m.genreName === Name && m._id !== id);
    });
}, []); 
 
return ( //<Container> -> is rendering issues & I do not know why
<BrowserRouter>
<ThemeProvider  breakpoints={["xxl","xl","lg","md","sm","xs"]}
    minBreakpoint="xs">
        <NavigationBar
        user={user}
        onLoggedOut={() => {setUser(null); setToken(null); localStorage.clear();
        }} />
    <Row  className="main-view" >
        <Routes>
                <Route
                path="/signup"
                element={
                    <>
                    {!user ? (
                    <Navigate to="/" />
                    ):( <Col md={5}>
                            <SignupView />
                        </Col>
                    )}
                    </>
                }
                />
                <Route 
                path="/login"
                element={
                    <>
                    {!user ? (
                        <Navigate to="/" />
                    ): ( <Col md={5}>
                        <LoginView onLoggedIn={(user) => setUser(user)} />
                        </Col>
                    )}
                    </>
                }
                />
                <Route
                path="/movies/:movieId"
                elemenet={
                    <>
                    {!user ? (
                        <Navigate to="/login" replace/>
                        ): movies.length === 0 ? (
                            <div>The list is empty!</div>
                            ): ( <Col md={8}>
                            <MovieView movies={movies} />
                            </Col>
                        )}
                    </>
                }
                />
                <Route
                path="/"
                element={
                    <>
                    {!user ? (
                        <Navigate to="/login" replace/>
                    ) : movies.length === 0 ? (
                        <div>The list is empty!</div>
                    ) : (
                        <>
                        {movies.map((movie) => (
                        <Col className="mb-5" key={movie._id} md={4}>
                            <MovieCard  movie={movie} />
                        </Col>
                     ))}
                    </>
                )}
                </>
              }
            />
        </Routes>
    </Row>
</ThemeProvider>
</BrowserRouter>
    );
};

