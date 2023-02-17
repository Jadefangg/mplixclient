import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view"; 

export const MainView = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);

useEffect(() => {
    fetch("https://movies-couch-api.vercel.app/movies") 
    .then((response) => response.json())
    .then((data) => {
        console.log(data); 
        const moviesFromApi = data.movies.map((movie) => {
            return {
                id: movie.key,   // id: doc.key,
                title: movie.title, // title: doc.title,
                image: `${movie.cover}`, // image: `${doc.cover}`,
                director: movie.director_name, // director: doc.director_name,
                genre: movie.genre_name // genre: doc.genre_name
            };
        });
        setMovies(moviesFromApi); 
    });
}, [ ]);
 
if (selectedMovie) {
    // let similarMovies = movies.filter(checkMovies); allowing to look up similar movies based on title, director, genre 
    // function checkMovies(title, director) {} 
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
        
