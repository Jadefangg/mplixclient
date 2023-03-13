import React from "react";

function UserInfo({ name, email}) {
    return(
        <>
        <h4>Your info</h4>
        <p placholder="Name" >{name}</p>
        <br/>
        <p placholder="e-mail">{email}</p>
        <br/>
        <p placholder="password">{password}</p>
        <br/>
        <p placholder="birthday">{birthday}</p>
        </>
    )
}
export default UserInfo