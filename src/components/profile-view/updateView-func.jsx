import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";


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
                <Card bg={'dark'} text={'warning'}> 
                    <Card.Body className="form-profile">
                        <Card.Title>Profile Update:</Card.Title>
                        <Card.Text></Card.Text>
                        <ListGroup>
                            <form onSubmit={handleSubmit}>
                                <ListGroup.Item variant="dark">
                                    <label className="label-fields">
                                        Password:
                                        <input 
                                        type="password"
                                        name="password"
                                        className="input-fields"
                                        onChange={e => setPassword(e.target.value) }
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br/>
                                <ListGroup.Item variant="dark">
                                    <label className="label-fields">
                                        Email:
                                        <input 
                                        type="email"
                                        name="email"
                                        className="input-fields"
                                        placeholder={user.Email}
                                        onChange={e => setEmail(e.target.value) }
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br/>
                                <ListGroup.Item variant="dark" >
                                    <label className="label-fields">
                                        Birthday:
                                        <input 
                                        type="date"
                                        name="birthday"
                                        className="input-fields"
                                        placeholder={user.Birthday}
                                        onChange={e => setBirthday(e.target.value) }
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br />
                                <Button variant="warning" type="submit" className="mt-3">
                                    Update User
                                </Button>
                            </form>
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