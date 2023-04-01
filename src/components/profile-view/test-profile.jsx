import { React, useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import FavoriteMovies from "./favorite-movies";
import { UserInfo } from "./user-info";
import { UpdateView } from "./update-user";
import { DeleteUser } from "./delete-user";


export const TestProfile = ({ user, setUser, movies, token, updateUser }) => {
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
                    <UpdateView user={user} updateUser={updateUser} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <FavoriteMovies /> */}
                </Col>
            </Row>
            <Row className="d-flex justify-content-center p-4">
                <Col >
                    <DeleteUser user={user} />
                </Col>
            </Row>
        </Container>
    );
};