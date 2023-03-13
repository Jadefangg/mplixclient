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

    
    // const favoriteMovies = movies.filter(m => {
    //     user.favoriteMovies.includes(m._id);
    // }); //fav mov only needs from there a button

    // const getUser = () => {}
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    // const onRemoveFavorite = (_id) => {}
    const handleUpdate = (e) => {

    }
    // useEffect(() => {}, [])

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
                                <Form.Group>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control>
                                        type="text"
                                        {/* defaultValue={user.Username} */}
                                        onChange= {(e) => handleUpdate(e)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control>
                                        type="password"
                                        {/* defaultValue={user.Password} */}
                                        onChange= {(e) => handleUpdate(e)}
                                    </Form.Control>
                                    </Form.Group>
                                <Form.Group>
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control>
                                        type="email"
                                        {/* defaultValue={user.Email} */}
                                        onChange= {(e) => handleUpdate(e)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Birthday:</Form.Label>
                                    <Form.Control>
                                        type="date"
                                        {/* defaultValue={user.Birthday} */}
                                        onChange= {(e) => handleUpdate(e)}
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