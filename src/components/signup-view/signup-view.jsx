import { useState } from "react";
// importing from r-bootstrap Form feature
import Form from"react-bootstrap/Form";
// importing Container
import Container from "react-bootstrap/Container";
// importing Row
import Row  from "react-bootstrap/Row";
// importing Columns
import Col from "react-bootstrap/Col";
// importing Card
import Card from "react-bootstrap/Card";
// importing from r-bootstrap Button feature
import Button from "react-bootstrap/Button"; 

export const SignupView = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");

// validation of signup view
    const handleSubmit = (event) => {
        event.preventDefault();
    const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthdate: birthdate
        };

    fetch("https://movies-couch-api.vercel.app/users", {
        method: "POST",
         body: JSON.stringify(data),         
         headers: {
            "Content-Type": "application/json"
        }                 
        }).then((response) => {
         if (response.ok) {
            alert("Signup successful");
             window.location.reload();
             } else {
                 alert("Signup failed")
                } 
            });
         };
// signup form with submit button
        return (
// handleSubmit is the callback of onSubmit, tells the login API to validate user & password
<Container>
    <Row>
        <Col>
            <Card>
                <Card.Body className="movies-couch">
                    <Form className="movies-couch" onSubmit={handleSubmit}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                <Form.Control type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                minLength="3"
                                />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            minLength="5" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        </Form.Group>
                        <Form.Group controlId="Birthdate">
                            <Form.Label>Birthdate:</Form.Label>
                            <Form.Control type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            required
                            />
                        </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button> 
                    </Form> 
                    </Card.Body>
                </Card>
            </Col>
        </Row>
</Container>

    );
};
