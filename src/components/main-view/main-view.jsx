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

// commented sections for testing purposes
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
            return {
                key: movie.id,
                Title: movie.Title,
                Image: movie.ImageURL, 
                Director: movie.Director_name,
                Genre: movie.Genre_name?.[0]
            };    
        });
        setMovies(moviesFromApi); 
    });
}, [token]); //[token]
if (!user) {
    return (
    <>
        <LoginView onLoggedIn={(user , token) => {
            setUser(user);
            setToken(token);
        }} />
        or
        <SignupView />
        </>
    );
}
// display movie-view when movie is selected 
if (selectedMovie) {
    
        return (
        <>
            <MovieView movie={selectedMovie} onMovieClick={() => setSelectedMovie(null)} /> 
            <hr />
            {/* <h2>Similar Movies<h2> */}
        </>
        );
    }
    // display test message if list of movies is empty
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }
// display movie-card with logout button, if user does not select a movie
    return (
        
    <>
        <div>
            {movies.map((movie) => {
            return  <MovieCard key={movie.id}  movie={movie} onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                }} />;
            })}
        </div>
            <button onClick={() => { setUser(null); setToken(null); }}>Logout</button>
    </>
        ); //) missing a previus ) for the loading condition
    };