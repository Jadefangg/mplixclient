import React from "react";
import { Card } from "react-bootstrap";

function UserInfo({ user }) {
    return (
        <>
        <h2>Your Profile:</h2>
            <Card bg={'dark'} text={'warning'}>
                <Card.Body className="profile-view">
                    <>
                        <h3>Username:</h3>
                        <p >{user.Username}</p>
                        <br />
                        <h3>Email:</h3>
                        <p >{user.Email}</p>
                        <br />
                        <h3 >Birthday:</h3>
                        <p>{new Date(user.Birthday).toLocaleString()}</p>
                        <br />
                    </>
                </Card.Body>
            </Card>
        </>
    )
}
export { UserInfo }; 
