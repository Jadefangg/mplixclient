import React, {useEffect, useState} from "react"; 
import Form from "react-bootstrap/Form";
import { Col, ListGroupItem, Row}  from "react-bootstrap";
import { Button, Card, Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import axios from "axios";


import {UserInfo} from "./user-info"; 
import {UpdateUser} from "./update-user";
import { DeleteUser } from "./delete-user";
import {FavoriteMovies} from "./favorite-movies";

function ProfileView ({ user, setUser, token, movies, removeFavMovie, onLoggedOut})  {
console.log(user);
console.log(user.Username);
console.log(user.Email);
return(
        <Container>
            <Row>
              <Col>
                <h2>Your Profile:</h2>
              </Col>
            </Row>
            <Row> 
                <Col xs={12} sm={4} md={6} lg={6} className="user-profile">
                    <Card>
                        <UserInfo username={user.Username} email={user.Email} birthday={user.Birthday.slice(0,10)}/>
                    </Card>
                    </Col>
                    <Col xs={12} sm={4} md={6} lg={6} className="user-profile">
                    {/* <DeleteUser onLoggedOut={onLoggedOut} token={token} user={user}/> */}
                </Col>
                <Col xs={12} sm={4} md={6} lg={6} className="user-profile">
                {/* <UpdateUser set={setUser} token={token} user={user}/> */}
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>Favorite Movies List</h2>
                {/* <FavoriteMovies movies={movies} removeFavMovie={removeFavMovie} user={user}/> */}
                </Col>
            </Row>
        </Container>

        );
}

export {ProfileView};