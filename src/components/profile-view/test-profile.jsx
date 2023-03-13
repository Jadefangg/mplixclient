import React, {useEffect, useState} from "react"; 
import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Button, Card, Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import axios from "axios";

import UserInfo from "./user-info"; 
import UpdateUser from "./update-user";
import FavoriteMovies from "./favorite-movies";

export function TestProfile({ user, token, movies,  }) {

    // const [user, setUser] = useState({})

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
                            <UserInfo /*user={user} email={email}*/ />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4}>
                    <Card>
                        <Card.Body>
                            <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
                        </Card.Body>
                    </Card>
                </Col>
                {/* <FavoriteMovies favoriteMovies={favoriteMoviesList} /> */}
            </Row>
        </Container>

    );
}