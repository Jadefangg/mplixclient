import React, {useEffect, useState} from "react"; 
import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Button, Card, Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import axios from "axios";

// import UserInfo from "./user-info"; 
// import UpdateUser from "./update-user";
// import FavoriteMovies from "./favorite-movies";

export function TestProfile({ user, token, movies,  }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    
    // const favoriteMovies = movies.filter(m => {
    //     user.favoriteMovies.includes(m._id);
    // }); //fav mov only needs from there a button

    // const getUser = () => {}
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    }
    // const onRemoveFavorite = (_id) => {}
    const handleEdit = (e) => {
        const updateUser={
            username,
            password,
            email,
            birthday
        };
        setUsername("");
        setPassword("");
        setEmail("");
        setBirthday("");
    }
    useEffect(() => {
        console.log("setUsername");
        console.log("setPassword");
        console.log("setEmail");
        console.log("setBirthday");
    });
    // , [])

    return (
        <Container>
            <Row>
                <Col xs={12} sm={4} md={6} lg={6}>
                    <Card>
                        <Card.Body>
                            <div>
                                <h4>Your info</h4>
                                <p placholder="Name" >{user.Username}</p>
                                <br/>
                                <p placholder="e-mail">{user.Email}</p>
                                <br/>
                                <p placholder="password">{user.Password}</p>
                                <br/>
                                <p placholder="birthday">{user.Birthday}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={(e) => handleSubmit(e)}> 
                                <h4>Update User info:</h4>
                                <Form.Group >
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control controlId="formUsername">
                                        type="text"
                                        value={user.Username}
                                        onChange= {(e) => handleEdit(e)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control>
                                        type="password"
                                        value={user.Password}
                                        onChange= {(e) => handleEdit(e)}
                                    </Form.Control>
                                    </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control>
                                        type="email"
                                        value={user.Email}
                                        onChange= {(e) => handleEdit(e)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBirthday">
                                    <Form.Label>Birthday:</Form.Label>
                                    <Form.Control>
                                        type="date"
                                        value={user.Birthday}
                                        onChange= {(e) => handleEdit(e)}
                                        {/* ref={birthdayInputRef} */}
                                </Form.Control>
                                </Form.Group>
                                    <Form.Group>
                                    <Button variant="button" type="submit" >Submit</Button>
                                    {/* <Button variant="button" type="submit" onClick={() => this.onDeleteUser}>Delete</Button> */}
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <FavoriteMovies favoriteMovies={favoriteMoviesList} /> */}
            </Row>
        </Container>

    );
}