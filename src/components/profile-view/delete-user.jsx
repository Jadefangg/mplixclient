import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function DeleteUser ({onLoggeOut, token, user}) {
    const deleteUser = function () {
        axios.delete(`https://movies-couch-api.vercel.app/users/${user.Username}`, 
        {headers: {Authorization: `Bearer ${token}`}})
        .then(function (response) {
            if (response.status === 401) {
                throw new Error("Sorry, you're not authorized to access this resource.");
            } else if( response.status === 404) {
                throw new Error("User was not found.")
            } else if(response.ok) {
                toast.success(`You succesfully deleted the account with the username ${user.Username}.`);
                onLoggeOut();
            }
        })
        .catch(function (error) {
            if (error.message) {
                toast.error(error.message);
            } else {
                toast.error("An error ocurred while trying to delete. Please try again later.");
            }
            console.error("An error occured: " + error)
        });
    };
    return (
        <>
        <Button className="" onClick={deleteUser} type="button">Delete Account</Button>
        </>
    )
}
export {DeleteUser};