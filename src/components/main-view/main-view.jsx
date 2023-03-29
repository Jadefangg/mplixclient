import { useState, useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { toast } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

// import { ProfileView } from "../profile-view/profile-view";
import { TestProfile } from "../profile-view/test-profile";


// exporting Main view variabels
function MainView() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);


  // run whenever a user logs out
  const onLoggedOut = function () {
    setUser(null);
    setToken(null);
    localStorage.clear();
  }
  useEffect(() => {
    //verifying token-authentication to access request
    if (!token) {
      return;
    }
    fetch("https://movies-couch-api.vercel.app/movies", {
      headers: { Authorization: `Bearer ${token}` },
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


      });
  }, [token]);

  //add Fav-movie
  const addFavMovie = function (_id) {
    axios.put(
      `https://myflix-movie-app-elenauj.onrender.com/users/${user.Username}/topMovies/${movieId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then(function (response) {
        if (response.status === 401) {
          throw new Error(
            "Sorry, you're not authorized to access this resource. "
          );
        } else if (response.status === 404) {
          throw new Error('No such movie found.');
        } else if (response.status === 409) {
          throw new Error('You already added this movie to the list.');
        } else if (response.ok) {
          return response.json();
        }
      })
      .then(function (updatedUser) {
        toast.success('Movie has been added to your Favorite Movies.');
        setUser(updatedUser);
      })
      .catch(function (error) {
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error(
            'An error occurred while trying to add movie. Please try again later.'
          );
        }
        console.error('An error occurred:' + error);
      });
  };
  // remove Fav-movie
  const removeFavMovie = function (movieId) {
    axios.delete(
      `https://myflix-movie-app-elenauj.onrender.com/users/${user.Username}/topMovies/${movieId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(function (response) {
        if (response.status === 401) {
          throw new Error(
            "Sorry, you're not authorized to access this resource. "
          );
        } else if (response.ok) {
          return response.json();
        }
      })
      .then(function (updatedUser) {
        toast.success('Movie has been removed from your Favorite Movies.');
        setUser(updatedUser);
      })
      .catch(function (error) {
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error(
            'An error occurred while trying to delete. Please try again later.'
          );
        }
        console.error('An error occurred:' + error);
      });
  };



  return (
    <BrowserRouter>
      <ThemeProvider breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
        minBreakpoint="xs">
        <NavigationBar
          user={user}
          onLoggedOut={onLoggedOut}
        />
        <Row className="main-view" >
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (<Col md={5}>
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
                  ) : (<Col md={5}>
                    <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
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
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <div>The list is empty!</div>
                  ) : (<Col md={8}>
                    <MovieView movies={movies} addFavMovie={addFavMovie} removeFavMovie={removeFavMovie}
                      favoriteMovies={user.favoriteMovies} />
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
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <div>The list is empty!</div>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col className="mb-5" key={movie._id} md={4}>
                          <MovieCard movie={movie} />
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
                console.log(user) ||
                <>
                  {user ? (
                    <Col className="mb-5" >
                      <TestProfile user={user} setUser={setUser} movies={movies} onLoggedOut={onLoggedOut} />
                      {/* <ProfileView  token={token}  user={user}  setUser={setUser}  
                        movies={movies} removeFavMovie={removeFavMovie} onLoggedOut={onLoggedOut}/>*/}
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

export { MainView };