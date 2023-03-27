import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function UpdateUser({setUser, token, user}) {
    const [usernameUpdate, setUsernameUpdate] = useState("");
    const [passwordUpdate, setPasswordUpdate] = useState("");
    const [emailUpdate, setEmailUpdate] = useState("");
    const [birthdayUpdate, setBirthdayUpdate] = useState("");

    const handleSubmit = function (event){
    event.preventDefault();
    
    // only send keys to the update objects that were 
    const data = {};
    if(usernameUpdate) {
        data.Username = usernameUpdate;
    }
    if(passwordUpdate) {
        data.Password = passwordUpdate;
    }
    if (emailUpdate) {
        data.Email= emailUpdate;
    }
    if (birthdayUpdate) {
        data.Birthday = birthdayUpdate
    }
    //if data object is empty, do not perform the axios request
    if (Object.keys(data).length === 0) {
        toast.error("Please fill in at least one field to update");
        console.error("Error: no fileds filled.");
    } 
    axios.put(`https://movies-couch-api.vercel.app/users/${user.Username}`,
    {headers: {Authorization: `Bearer ${token}`}})
        .then(function (response) {
            if (response.status === 401) {
        throw new Error("Sorry, you're not authorized to access this resource.");
    } else if( response.status === 404) {
        throw new Error("User was not found.")
    } else if(response.ok) {
        toast.success(`Your information hasd been successfully update`);
        setUser(function (prevUser) {
            return Object.assign({}, prevUser, data);
        });
        setUsernameUpdate("");
        setPasswordUpdate("");
        setEmailUpdate("");
        setBirthdayUpdate("");
        }
    })
    .catch(function (error) {
        if (error.message) {
            toast.error(error.message);
        } else {
            toast.error("An error ocurred while trying to update. Please try again later.");
        }
        console.error("An error occured: " + error)
    });
    }

    return (
        <>
        <Form onSubmit={handleSubmit}> 
                 <h4>Update User info:</h4>
                 <Form.Group /*controlId="updateFormUsername"*/>
                     <Form.Label>Name:</Form.Label>
                     <Form.Control>
                         type="text"
                         value={usernameUpdate}
                         onChange={function(event) {setUsernameUpdate(e.target.value); } }
                     </Form.Control>
                 </Form.Group>
                 <Form.Group /*controlId="updateFormPassword"*/>
                     <Form.Label>Password:</Form.Label>
                     <Form.Control>
                         type="password"
                         value={passwordUpdate}
                         onChange={function(event) {setPasswordUpdate(e.target.value); } }
                     </Form.Control>
                     </Form.Group>
                 <Form.Group>
                     <Form.Label>E-mail:</Form.Label>
                     <Form.Control /*controlId="updateFormEmail"*/>
                         type="email"
                         value={emailUpdate}
                         onChange={function(event) {setEmailUpdate(e.target.value); } }
                     </Form.Control>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Birthday:</Form.Label>
                     <Form.Control /*controlId="updateFormBirthday"*/>
                         type="date"
                         value={birthdayUpdate}
                         onChange={function(event) {setBirthdayUpdate(e.target.value); } }
                    </Form.Control>
                 </Form.Group>
                     <Form.Group>
                         <Button variant="button" className="edit-user" type="submit" >Submit</Button>
                    </Form.Group>
             </Form>
        </>
    )
}
export { UpdateUser};