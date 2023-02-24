//importing other compoents
import { useState, useEffect } from "react";
// importing Moviecard-component
import { MovieCard } from "../movie-card/movie-card";
//importing Movieview componentS
import { MovieView } from "../movie-view/movie-view"; 

export const MainView = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);

useEffect(() => {
    fetch("https://movies-couch-api.vercel.app/movies") 
    .then((response) => response.json())
    .then((movies) => {
        console.log(movies); 
        const moviesFromApi = movies.map((movie) => {
            return {
                id: movie.key,
                Title: movie.Title,
                Image: movie.ImageURL, //Images are not displaying->hence cause error
                Director: movie.Director_name,
                Genre: movie.Genre_name?.[0]
            };    
        });
        setMovies(moviesFromApi); 
    });
}, [ ]);

if (selectedMovie) {
    return (
        <MovieView movie={selectedMovie} onMovieClick={() => setSelectedMovie(null)} />
        );
    }
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => {
            return  <MovieCard key={movie.id}  movie={movie} onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                }} />;
            })}
            </div>
        );
    };