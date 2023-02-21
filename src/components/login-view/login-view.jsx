import React from "react";
import { useState } from "react";
const [username, setUsername] = useState("");
export const LoginView = ({ onLoggedIn }) => {
 const handleSubmit = (event) =>{ //prevents default behavior of the form which is to reload the entire page
    event.preventDefault();
    const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };
    fetch("https://movies-couch-api.vercel.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)        
        })
     .then((response) => {
         if (response.ok) {
            alert("Signup successful");
             window.location.reload();
             } else {
                 alert("Signup failed")
                } 
            });
         };
        .then((data)  => {
        console.log("Login response: ", data);
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
        } else {
            alert("No such user");
        }
    })
    .catch((e) => {
        alert("Something went wrong!");
    });
//  };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type= "text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength="5"/>
            </label>
        
            <label> 
                Password:
                <input type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required />
            </label>
            <label>
                Birthday:
                <input type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required />
            </label>
            <button type="submit">Submit</button> 
        </form>
    );
};