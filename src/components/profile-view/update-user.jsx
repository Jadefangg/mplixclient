import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"

function UpdateUser({handleSubmit, handleUpdate}) {
    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <h4>Update User info:</h4>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control>
                    type="text"
                    name="username"
                    defaultValue={user.Username}
                    onChange= {(e) => handleUpdate(e)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control>
                    type="password"
                    name="password"
                    defaultValue={user.Password}
                    onChange= {(e) => handleUpdate(e)}
                </Form.Control>
                </Form.Group>
            <Form.Group>
                <Form.Lable>E-mail:</Form.Lable>
                <Form.Control>
                    type="email"
                    name="email"
                    defaultValue={user.Email}
                    onChange= {(e) => handleUpdate(e.value.target)}
                </Form.Control>
                <Button variant="button" type="submit">Update</Button>
                </Form.Group>
        </Form>
    )
}
export default UpdateUser