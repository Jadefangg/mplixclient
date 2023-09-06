import React from "react";
import { Card } from "react-bootstrap";

function UserInfo({ user }) {
    const userBirthday = new Date(user.Birthday);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric" 
    };
    const formattedBirthday = userBirthday.toLocaleDateString("de-DE", options);
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
                        <p>{formattedBirthday}</p>
                        <br />
                    </>
                </Card.Body>
            </Card>
        </>
    )
}
export { UserInfo }; 
