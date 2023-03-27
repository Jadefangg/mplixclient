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

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            email:null,
            birthday: null,
            favoriteMovies:[]
        }
    }
 
    componentDidMount = () => {
        const accessToken = localStorage.getItem("token");
        this.getUser(accessToken);
    }
// remove fav-mov
    onRemoveFavorite = (e, movie) => {
        const user = localStorage.getItem("user");
        console.log(user);
        const token = localStorage.getItem("token");
        console.log(this.props);
        axios
        .delete(`https://movies-couch-api.vercel.app/users/${user.username}/movies/${movie._id}`,
            {headers: {Authorization: `Bearer ${token}`} }
        )
        .then((response) => {
            console.log(response);
            alert( `The Movie ${movie._id} was removed from favorite list`);
            this.componentDidmount();
        })
        .catch(function (error) {
            console.log(error);
        });
    };
// log-out function
    onLoggedOut = () =>  {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.setState({ user:null });
        window.open("/", "_self")
    } 
// retrieving user info
    getUser = (token) => {
        const username= localStorage.getItem("user");
        axios

        .get(`https://movies-couch-api.vercel.app/users/${username}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            this.setState({
                username: response.data.username,
                password: response.data.password,
                email: response.data.email,
                birthday: response.data.birthday,
                favoriteMovies: response.data.favoriteMovies
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    };
// edit username info
    editUser = (e) => {
        e.preventDefault();
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        axios
            .put(`https://movies-couch-api.vercel.app/users/${username}`,
            {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                birthday: this.state.birthday
            }, 
            {headers: {Authorization: `Bearer ${token}`}}
            )
            .then((response) =>{
                this.setState({
                    username: response.data.userusername,
                    password: response.data.password,
                    email: response.data.email,
                    birthday: response.data.birthday,
                    favoriteMovies: response.data.favoriteMovies
                });
                localStorage.setItem("user", this.state.username);
                const data = response.data;
                console.log(data);
                console.log(this.state.username);
                alert("Profile updatd!");
                window.open(`/users/${username}`, "_self");
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    // delete username
    onDeleteUser= () => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        axios
        .delete(`https://movies-couch-api.vercel.app/users/${username}`,
        {headers: {Authorization: `Bearer ${token}`}, 
    })
    .then((response) => {
        console.log(response);
        alert(`Profile with this ${username} has been deleted.`);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.open("/", "_self");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    setUsername = (value) => {
        this.setState({username: value});
        this.username = value;
    }
    setPassword = (value) => {
        this.setState({password: value});
        this.password = value;
    }
    setEmail = (value) => {
        this.setState({email: value});
        this.email = value;
    }
    setBirthday = (value) => {
        this.setState({birthday: value});
        this.birthday = value;
    }

    
render() {
    const { movies } = this.props;
    const { FavoriteMovies, username, email, birthday, password } = this.state;
    return(
        <Container>
            <Row> 
                <Col xs={12} sm={4} md={6} lg={6} clasName="user-profile">
                    <Card>
                        <Card.Body>
                        <>
                         <h3>username={this.username}</h3>
                         <br/>
                         <h3>password={this.password}</h3>
                         <br/>
                         <h3>email={this.email}</h3>
                         <br/>
                         <h3>birthday={this.birthday}</h3>
                         <br/>
                        </>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <Col xs={12} sm={6} md={4} lg={4}>
                    <Card>
                        <Card.Body>
                            <UpdateUser 
                            editUser={this.editUser}
                            setUsername={this.setUsername}
                            setPassword={this.setPassword}
                            setEmail={this.setEmail}
                            setBirthday={this.setBirthday} />
                        </Card.Body>
                    </Card>
                </Col> */}
                {/* <FavoriteMovies favoriteMovies={favoriteMovies}/> */}
            </Row>
        </Container>

        );
    }
}
