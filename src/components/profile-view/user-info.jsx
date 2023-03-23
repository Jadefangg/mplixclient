import React from "react";

function UserInfo({ Username, Email, Password, Birthday}) {
    return(
        <>
        <h4>Your info</h4>
        <p placholder="Name" >{Username}</p>
        <br/>
        <p placholder="e-mail">{Email}</p>
        <br/>
        <p placholder="password">{Password}</p>
        <br/>
        <p placholder="birthday">{Birthday}</p>
        </>
    )
}
export default UserInfo