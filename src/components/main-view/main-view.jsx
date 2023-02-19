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
        const moviesFromApi = movies.map((doc) => {
            return {
                id: movies.key,
                title: movies.title,
                // image: `${doc.cover}`,
                director: movies.director_name,
                genre: movies.genre_name
            };
        });
        setMovies(moviesFromApi); 
    });
}, [ ]);

if (selectedMovie) {
    // allowing to look up similar movies based on title, director, genre
    // let filteredMovies = [];
        // const filterByGenre = (genre, id) => {
        // let similarMovies = movies.filter((m) =>
        //  m.genreName === genre && m._id !== id); 
        // return filteredMovies
        // }; 
    // const filterByGenre = (director, id) => {
        // let similarMovies = movies.filter((m) =>
        //  m.directorName === director && m._id !== id); 
        // return filteredMovies
        // };  
    // const filterByGenre = (title, id) => {
        // let similarMovies = movies.filter((m) =>
        //  m.titleName === title && m._id !== id); 
        // return filteredMovies
        // }; or
    //let filteredMovies =  movies.filter((m) =>
        //  m.genreName === genre && m._id !== id); 
        // return filteredMovies
        // };
        return (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
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
        
