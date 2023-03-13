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
            user: null,
            password: null,
            email:null,
            birthdate: null,
            favoriteMovies:[]
        }
    }
 
    componentDidmount = () => {
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
        .delete(`https://movies-couch-api.vercel.app/users/${user}/movies/${movie.id}`,
            {headers: {Authorization: `Bearer ${token}`} }
        )
        .then((response) => {
            console.log(response);
            alert( `The Movie ${movie.id} was removed from favorite list`);
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
        const user= localStorage.getItem("user");
        axios

        .get(`https://movies-couch-api.vercel.app/users/${user}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            this.setState({
                user: response.data.user,
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
            .put(`https://movies-couch-api.vercel.app/users/${user}`,
            {
                user: this.state.user,
                password: this.state.password,
                email: this.state.email,
                birthday: this.state.birthday
            }, 
            {headers: {Authorization: `Bearer ${token}`}}
            )
            .then((response) =>{
                this.setState({
                    user: response.data.user,
                    password: response.data.password,
                    email: response.data.email,
                    birthday: response.data.birthday,
                    favoriteMovies: response.data.favoriteMovies
                });
                localStorage.setItem("user", this.state.user);
                const data = response.data;
                console.log(data);
                console.log(this.state.user);
                alert("Profile updatd!");
                window.open("/users/${username}", "_self");
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
        .delete(`https://movies-couch-api.vercel.app/users/${user}`,
        {headers: {Authorization: `Bearer ${token}`}, 
    })
    .then((response) => {
        console.log(response);
        alert(`Profile with this ${user} has been deleted.`);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.open("/", "_self");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    setUser = (value) => {
        this.setState({username: value});
        this.user = value;
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
    const { FavoriteMovies, user, email, birthday, password } = this.state;
    return(
        <Container>
            <Row> 
                <Col xs={12} sm={4} md={6} lg={6}>
                    <Card>
                        <Card.Body>
                        <UserInfo user={user} email={email} />
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
                <FavoriteMovies favoriteMovies={favoriteMovies}/>
            </Row>
        </Container>

        );
    }
}
{/* <Form className="profile-edit" onSubmit={handleEdit}>
    <Form.Group controlId="formUsername">
    <Form.Label>User:</Form.Label>
    <Form.Control 
    type="text"
    value={user.username}
    onChange= {(e) => setUser(e.target.value)}
    minLength="3"
    />
    </Form.Group>
    <Form.Group controlId="formPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control 
    type="password"
    value={user.Password}
    onChange= {(e) => setPassword(e.target.value)}
    minLength="5" 
    />
    </Form.Group>
    <Form.Group controlId="formEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control 
    value={user.email}
    onChange= {(e) => setEmail(e.target.value)}
    />
    </Form.Group>
    </Form.Group>
    <Form.Group controlId="formBirthday">
    <Form.Label>Birthday:</Form.Label>
    <Form.Control 
    type="date"
    value={user.Birthday}
    onChange= {(e) => setBirthday(e.target.value)}
    />
    </Form.Group>
    <Button variant="primary" type="Edit">Edit</Button>  
</Form> */}