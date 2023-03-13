import { useState, useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Row   from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view"; 
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

// import { ProfileView } from "../profile-view/profile-view";
import { TestProfile } from "../profile-view/test-profile";


// exporting Main view variabels
export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(storedUser? storedUser : null);
    
    // const toggleFavorite = (movie) => {
    //     const index = favoriteMovies.indexOf(movie);
    //     if (index > -1) {
    //         onRemoveFavorite(movie);
    //       setFavoriteMovies(
    //         favoriteMovies.filter((favoriteMovie) => favoriteMovie.id !== movie.id)
    //       );
    //     } else {
    //       addFavoriteMovie(movie);
    //       setFavoriteMovies([...favoriteMovies, movie]);
    //     }
    //   };

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
                _id: movie._id,
                Title: movie.Title,
                ImageURL: movie.ImageURL, 
                Description: movie.Description, 
                Director: movie.Director,
                Genre: movie.Genre
            };    
        });
        console.log(moviesFromApi)
        setMovies(moviesFromApi); 
        
        // const findSimilarMovies = movies.filter((m), m.genreName === Name && m._id !== id);
    });
}, [token]);
// similar movies function
const favoriteMovies = () => {}

return ( 
<BrowserRouter>
<ThemeProvider  breakpoints={["xxl","xl","lg","md","sm","xs"]}
    minBreakpoint="xs">
        <NavigationBar
        user={user} 
        onLoggedOut={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
        }}
         />
    <Row  className="main-view" >
        <Routes>
                <Route
                path="/signup"
                element={
                    // console.log("hi")|| 
                    <>
                    {user ? (
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
                    {user ? (
                        <Navigate to="/" />
                    ): ( <Col md={5}>
                        <LoginView onLoggedIn={(user, token) => {setUser(user); setToken(token); }}  /> 
                        </Col>
                    )}
                    </>
                }
                />
                <Route
                path="/movies/:movieId"
                element={
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
            <Route
                path="/profile"
                element={
                    <>
                    {user ? (
                        <Col className="mb-5" >
                            <TestProfile   user={user} movies={movies}/>
                        {/* <ProfileView  token={token}  user={user} movies={movies}/> */}
                    </Col>
                    ) : (
                    <Navigate to="/login" />
                    )
                }
                </>
              }
            />
        </Routes>
    </Row>
</ThemeProvider>
</BrowserRouter>
    );
};

