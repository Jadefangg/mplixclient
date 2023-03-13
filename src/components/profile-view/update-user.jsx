import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"


function UpdateUser({handleSubmit, handleUpdate}) {
    return (
        <Form onSubmit={(e) => handleSubmit(e)}> 
                 <h4>Update User info:</h4>
                 <Form.Group>
                     <Form.Label>Name:</Form.Label>
                     <Form.Control>
                         type="text"
                         defaultValue={username}
                         onChange= {(e) => handleUpdate(e)}
                     </Form.Control>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Password:</Form.Label>
                     <Form.Control>
                         type="password"
                         defaultValue={password}
                         onChange= {(e) => handleUpdate(e)}
                     </Form.Control>
                     </Form.Group>
                 <Form.Group>
                     <Form.Label>E-mail:</Form.Label>
                     <Form.Control>
                         type="email"
                         defaultValue={email}
                         onChange= {(e) => handleUpdate(e)}
                     </Form.Control>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Birthday:</Form.Label>
                     <Form.Control>
                         type="date"
                         defaultValue={birthday}
                         onChange= {(e) => handleUpdate(e)}
                         ref={birthdayInputRef}
                 </Form.Control>
                 </Form.Group>
                     <Form.Group>
                     <Button variant="button" type="submit" >Submit</Button>
                     {/* <Button variant="button" type="submit" onClick={() => this.onDeleteUser}>Delete</Button> */}
                 </Form.Group>
             </Form>

        // <Form onSubmit={(e) => this.editUser(e, 
        // this.username,
        // this.password,
        // this.email,
        // this.birthday
        // )}>
        //     <h4>Update User info:</h4>
        //     <Form.Group>
        //         <Form.Label>Name:</Form.Label>
        //         <Form.Control>
        //             type="text"
        //             defaultValue={username}
        //             onChange= {(e) => this.setUsername(e.value.target)}
        //         </Form.Control>
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Password:</Form.Label>
        //         <Form.Control>
        //             type="password"
        //             defaultValue={password}
        //             onChange= {(e) => this.setPassword(e.value.target)}
        //         </Form.Control>
        //         </Form.Group>
        //     <Form.Group>
        //         <Form.Label>E-mail:</Form.Label>
        //         <Form.Control>
        //             type="email"
        //             defaultValue={email}
        //             onChange= {(e) => this.setEmail(e.value.target)}
        //         </Form.Control>
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Birthday:</Form.Label>
        //         <Form.Control>
        //             type="date"
        //             defaultValue={birthday}
        //             onChange= {(e) => this.setBirthday(e.value.target)}
        //             ref={birthdayInputRef}
        //     </Form.Control>
        //     </Form.Group>
        //         <Form.Group>
        //         <Button variant="button" type="submit" onClick={() => this.editUser}>Update</Button>
        //         <Button variant="button" type="submit" onClick={() => this.onDeleteUser}>Delete</Button>
        //     </Form.Group>
        // </Form>
    )
}
export default UpdateUser