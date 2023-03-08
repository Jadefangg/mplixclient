import React from "react";

function UserInfo({ name, email}) {
    return(
        <>
        <h4>Your info</h4>
        <p placholder="Your name" >{name}</p>
        <br/>
        <p placholder="e-mail">{email}</p>
        
        </>
    )
}
export default UserInfo