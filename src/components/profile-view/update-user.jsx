import React, { useState } from 'react';
import { Button, Form, Row, Col, CardGroup, Card, ListGroup } from 'react-bootstrap';

export const UpdateView = ({ user }) => {
    const token = localStorage.getItem("token");

    const [username, setUsername] = useState(user.Username);
    const [password, setPassword] = useState(user.Password);
    const [email, setEmail] = useState(user.Email);
    const [birthday, setBirthday] = useState(user.Birthday);

    const updateUser = (user) => {
        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                if(data) {
                    console.log(data);
                    localStorage.setItem('user', JSON.stringify(data));
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
        };

        fetch(
            `https://movies-couch-api.vercel.app/users/${user.Username}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => {
                if (response.ok) {
                    alert('Changes saved');
                    updateUser(user);
                } else {
                    alert('Oops, somethings went wrong');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <Row className="mt-2">
            <Col >
                <Card>
                    <Card.Body className="form-profile">
                        <Card.Title>Profile Update</Card.Title>
                        <Card.Text></Card.Text>
                        <ListGroup>
                            <form onSubmit={handleSubmit}>
                                <ListGroup.Item>
                                    <label>
                                        Username:
                                        <input
                                            type="text"
                                            name="username"
                                            className=""
                                            value={username}
                                            placeholder={user.Username}
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item>
                                    <label>
                                        Password:
                                        <input
                                            type="password"
                                            name="password"
                                            className=""
                                            value={password}
                                            placeholder="Enter Password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item>
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            className=""
                                            value={email}
                                            placeholder={user.Username}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item>
                                    <label>
                                        Birthday:
                                        <input
                                            type="date"
                                            name="birthday"
                                            className=""
                                            value={birthday}
                                            placeholder={user.Birthday}
                                            onChange={e => setBirthday(e.target.value)}
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item>
                                    <Button variant='primary' type='submit' className='mt-3'>
                                        Update User
                                    </Button>
                                </ListGroup.Item>
                            </form>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};