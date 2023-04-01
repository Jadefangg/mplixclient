import { React, useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import FavoriteMovies from "./favorite-movies";
import { UserInfo } from "./user-info";
import { UpdateView } from "./update-user";


export const TestProfile = ({ user, setUser, movies, token, onLoggedOut }) => {
    const [myuser, setMyuser] = useState('');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    //get users 
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        axios.get(`https://movies-couch-api.vercel.app/users/${user.Username}`,
            { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                setMyuser(response.data);
            })
            .catch(error => {
                console.error("An error ocurred" + error);
            });
    }, []);

    // delete user
    const deleteUser = function () {
        axios.delete(`https://movies-couch-api.vercel.app/users/${user.Username}`,
            { headers: { Authorization: `Bearer ${token}` } })
            .then(function (response) {
                if (response.status === 401) {
                    throw new Error("Sorry, you're not authorized to access this resource.");
                } else if (response.status === 404) {
                    throw new Error("User was not found.")
                } else if (response.ok) {
                    toast.success(`You succesfully deleted the account with the username ${user.Username}.`);
                    onLoggedOut();
                }
            })
            .catch(function (error) {
                if (error.message) {
                    toast.error(error.message);
                } else {
                    toast.error("An error ocurred while trying to delete. Please try again later.");
                }
                console.error("An error occured: " + error)
            });
    };
    // Fav-movies 
    const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id))
    // remove-fav_Movies
    removeFavMovie = async (movies) => {
        const user = localStorage.getItem("user");
        console.log(user);
        const token = localStorage.getItem("token");
        console.log(token);
        axios.delete(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movies._id}`,
            { header: { Authorization: `Bearer ${token}` } }
        )
            .then((response) => {
                console.log(response);
                alert(`The Movie: ${movies._id} was removed from Favorite List`)
            })
            .catch(function (error) {
                console.error(" An error ocurred" + error);
            })
    }


    return (
        <Container className="profile-view">
            <Row className="d-flex justify-content-center p-4">
                <Col >
                    <UserInfo user={user} />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center p-4">
                <Col >
                <UpdateView user={user} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <FavoriteMovies /> */}
                    {/* <Button onClick={removeFavMovie} className="movie-card-button">Remove from Favorite List</Button> */}
                </Col>
            </Row>
        </Container>
    );
};