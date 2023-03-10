import React, {useEffect, useState} from "react"; 
import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserInfo from "./user-info"; 
import { FavoriteMovies } from "./favorite-movies";
import UpdateUser from "./update-user";
import { MovieCard } from "../movie-card/movie-card";

const ProfileView = ({ movies, toggleFavorite }) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email:"",
        birthdate:"",
        favoriteMovies:[]
       })
    const favoriteMovieList = movies.filter((movies) =>{
        return user.favoriteMoviesList.includes(movies._id);
    })
    const getUser = (username, token) => {
        const response =  fetch(
              `https://myflixapi.smartcoder.dev/v1/users/${username}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
            const { success, message, data } = response.json();
            if (data) {
              setUser({ ...data });
            } else {
              alert(message);
              console.error(error)
            }
          }
        getUser(username, token);
    }
    // const handleSubmit = (e) => {}
    const removeFav = async (id) => {
        const response = fetch(
            `https://myflixapi.smartcoder.dev/v1/users/${username}/movies/${movie.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const { success, message, data } =  response.json();
         if (data) {
            setUser({ ...data });
          } else {
            alert(message);
            console.error(error)
          };
        }
    const deleteUser = async () => {
        const response =  fetch(`https://movies-couch-api.vercel.app/users/${username}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const { success, message, data } =  response.json();
            if (success) {
              alert(message);
              message("Successful deletion")
            } else {
              console.error(message);
              alert("Update failed");
            }
        };
    const handleUpdate = () => {
        preventDefault();
    
        const userData ={
            username: username,
            password: password,
            email:email,
            birthday:birthday
        };
        const response = fetch(
              `https://movies-couch-api.vercel.app/users/${username}`,
              {
                method: "PUT",
                body: JSON.stringify(userData),
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
            const { success, message, data } =  response.json();
            if (success) {
              alert(message);
              setUpdateUser(false);
            } else {
              console.error(message);
              alert("Update failed");
            }
        };
    
    useEffect(() => {
        const initFavoriteMovies = movies.filter((movie) =>
        user.favoriteMovies.includes(movie._id)
        );
        setFavoriteMovies([initFavoriteMovies]);
    }, [movies, user]);
    
    // function for the Fav-mov
    const toggleFavorite = (movie) => {
        const index = favoriteMoviesList.indexOf(movie);
        if (index > -1 ) {
            deleteFavoriteMovie(movie);
            setFavoriteMovies(favoriteMovies.filter((favoriteMovie) => favoriteMovie.id !== movie._id));
        } else {
            addFavoriteMovie(movie);
            setFavoriteMovies([favoriteMovies, movie]);
        }
    };
    
            
        const handleToggle = (movie) => {
            toggleFavorite(movie);
        };
        const formatDate = (birthday) => {
            const date = new Date(birthday);
            const year = date.getFullYear();
            let month = date.getMonth() + 1;
            let dayOfTheMonth = date.getDate();
            if (month < 10) {
                month = `0${dayOfTheMonth}`;
            } return `${year}-${month}-${dayOfTheMonth}`
        };

    


return(
    <Container>
        <Row> 
            <Col xs={12} sm={4} md={6} lg={6}>
                <Card>
                    <Card.Body>
                    <UserInfo username={username} email={email} />
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
                <Card>
                    <Card.Body>
                        <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate}/>
                    </Card.Body>
                </Card>
            </Col>
            <FavoriteMovies favoriteMoviesList={favoriteMoviesList}/>
        </Row>
    </Container>

)