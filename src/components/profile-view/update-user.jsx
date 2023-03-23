import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"


function UpdateUser({editUser, setUsername, setPassword, setEmail, setBirthday, onDeleteUser}) {

    return (
        <Form onSubmit={(e) => this.editUser((e), this.Username, this.Password, this.Email, this.Birthday)}> 
                 <h4>Update User info:</h4>
                 <Form.Group>
                     <Form.Label>Name:</Form.Label>
                     <Form.Control>
                         type="text"
                         name="Username"
                         onChange= {(e) => this.Username(e.target.value)}
                     </Form.Control>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Password:</Form.Label>
                     <Form.Control>
                         type="password"
                         name="Password"
                         onChange= {(e) => this.Password(e.target.value)}
                     </Form.Control>
                     </Form.Group>
                 <Form.Group>
                     <Form.Label>E-mail:</Form.Label>
                     <Form.Control>
                         type="email"
                         name="Email"
                         onChange= {(e) => this.Email(e.target.value)}
                     </Form.Control>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Birthday:</Form.Label>
                     <Form.Control>
                         type="date"
                         name="Birthday"
                         onChange= {(e) => this.Birthday(e.target.value)}
                    </Form.Control>
                 </Form.Group>
                     <Form.Group>
                     <Button variant="button" className="edit-user" type="submit" onClick={() => this.editUser()}>Submit</Button>
                     <Button variant="button" className="delete-user" type="submit" onClick={() => this.onDeleteUser()}>Delete</Button>
                 </Form.Group>
             </Form>
    )
}
export default UpdateUser