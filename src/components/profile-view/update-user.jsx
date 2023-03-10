import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"


function UpdateUser({handleSubmit, handleUpdate}) {
    return (
        <Form onSubmit={(e) => handleSubmit(e.value.target)}>
            <h4>Update User info:</h4>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control>
                    type="text"
                    placholder="name"
                    defaultValue={username}
                    onChange= {(e) => handleUpdate(e.value.target)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control>
                    type="password"
                    placholder="password"
                    defaultValue={password}
                    onChange= {(e) => handleUpdate(e.value.target)}
                </Form.Control>
                </Form.Group>
            <Form.Group>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control>
                    type="email"
                    placholder="email"
                    defaultValue={email}
                    onChange= {(e) => handleUpdate(e.value.target)}
                </Form.Control>
                <Button variant="button" type="submit">Update</Button>
                </Form.Group>
                <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control>
                    type="date"
                    placholder="birthday"
                    defaultValue={email}
                    onChange= {(e) => handleUpdate(e.value.target)}
                    ref={birthdayInputRef}
                </Form.Control>
                <Button variant="button" type="submit">Update</Button>
                </Form.Group>
        </Form>
    )
}
export default UpdateUser