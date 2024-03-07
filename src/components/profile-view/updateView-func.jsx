import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Form, Row, Col, Card, ListGroup } from "react-bootstrap";


export const UpdateView = ({ user, updateUser}) => {
    const token = localStorage.getItem("token");

    const [password, setPassword] = useState(user.Password);
    const [email, setEmail] = useState(user.Email);
    const [birthday, setBirthday] = useState(user.Birthday); 

    const handleSubmit = function (event){
    event.preventDefault();
    
        const data = {
            Password: password,
            Email: email,
            Birthday: birthday,
        };

        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {
            method:"PUT",
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
         })
            .then((response) => {
                if (response.ok) {
                alert("Changes saved.");
                } else {
                alert("Ops, seems you do not have permission to access");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    console.log(UpdateView);

    return (

        <Row className="mt-2">
            <Col>
                <Card bg={"dark"} text={"#ffc107"}> 
                    <Card.Body className="form-profile">
                        <Card.Title>Profile Update:</Card.Title>
                        <Card.Text></Card.Text>
                        <ListGroup>
                            <Form onSubmit={handleSubmit}>
                                <ListGroup.Item style={{background: "#212529"}}>
                                    <Form.Label style={{color: "#ffc107",}}>
                                        Password:
                                        </Form.Label>
                                        <Form.Control 
                                        type="password"
                                        name="password"
                                        style={{backgroundColor: "#ffc107", color: "black", }}
                                        onChange={e => setPassword(e.target.value) }
                                        />
                                </ListGroup.Item>
                                <br/>
                                <ListGroup.Item style={{background: "#212529"}}>
                                    <Form.Label style={{color: "#ffc107",}}>
                                        Email:
                                        </Form.Label>
                                        <Form.Control 
                                        type="email"
                                        name="email"
                                        style={{backgroundColor: "#ffc107", color: "black", }}
                                        placeholder={user.Email}
                                        onChange={e => setEmail(e.target.value) }
                                        />
                                </ListGroup.Item>
                                <br/>
                                <ListGroup.Item style={{background: "#212529"}} >
                                    <Form.Label style={{color: "#ffc107",}}>
                                        Birthday:
                                        </Form.Label>
                                        <Form.Control 
                                        type="date"
                                        name="birthday"
                                        style={{backgroundColor: "#ffc107", color: "black", }}
                                        placeholder={user.Birthday}
                                        onChange={e => setBirthday(e.target.value) }
                                        />
                                </ListGroup.Item>
                                <br />
                                <Button variant="warning" type="submit" className="mt-3">
                                    Update User
                                </Button>
                            </Form>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

UpdateView.propTypes = {
user: PropTypes.object,
updateUser: PropTypes.func
}