import React, {useEffect, useState} from "react"; 
// import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";


// import UserInfo from "./user-info"; 
// import UpdateUser from "./update-user";
// import FavoriteMovies from "./favorite-movies";

    export const TestProfile= ({user, movies, token}) => {
        const [formData, setFormData] = useState({
            username: user.username,
            password: user.password,
            email: user.email,
            birthday: user.birthday
        });
        // get user?
    //    update user function
            const handleSubmit= event => {
                event.preventDefault();
                const token = localStorage.getItem("token");
                axios.put(`https://movies-couch-api.vercel.app/users/${user.username}`,
                formData,
                {headers: {Authorization: `Bearer ${token}`}}
                )
                .then((response) =>{
                    console.log(response.data);
                    alert("Profile updated!");
                    window.open(`/users/${user.username}`, "_self");
            })
            .catch(function (error) {
                console.log(error);
            });
            const handleChange = event => {
                const name = event.target.name;
                const value = event.target.value;
                setFormData(prevState => ({...prevState, [name]: value})); 
            }
            useEffect(() => {
                editUser({user, token});
            }, [])
            function editUser({user, token})  {
            }
    
    
    // delete user
    // remove fav-mov
    // 

    return (
        <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col xs={12} sm={4} md={6} lg={6} >
                        <Card>
                            <Card.Body clasName="user-profile">
                            <>
                             <h3>Username</h3>
                             <p >{user.Username}</p>
                             <br/>
                             <h3>Password</h3>
                             <p >{user.Password}</p>
                             <br/>
                             <h3>Email</h3>
                             <p >{user.Email}</p>
                             <br/>
                             <h3 >Birthday</h3>
                             <p >{user.Birthday}</p>
                             <br/>
                            </>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row> 
                   <Row className="d-flex justify-content-center p-4">
                        <Col sm={8} md={6} lg={5} xl={4} xxl={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Profile Information</Card.Title>
                                    <Card.Text></Card.Text>
                                        <form onSubmit={handleSubmit}>
                                        <label>
                                            Username:
                                            <input type="text" name="username" value={formData.username} onChange={handleChange} /> 
                                        </label>
                                        <br />
                                        <label>
                                            Password:
                                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                                        </label>
                                        <br />
                                        <label>
                                            Email:
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                        </label>
                                        <br />
                                        <label>
                                            Birthday:
                                            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
                                        </label>
                                        <br />
                                        <button  onClick={editUser}>Update User</button>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        ); 
    };
};