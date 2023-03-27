import React from "react";

function UserInfo({ Username, Email, Birthday}) {
    return(
        <>
        <h4>Your info</h4>
        <p placholder="Name" >{user.Username}</p>
        <br/>
        <p placholder="e-mail">{user.Email}</p>
        <br/>
        <p placholder="birthday">{user.Birthday}</p>
        </>
    )
}
export {UserInfo}; 