import  { React, useEffect, useState } from "react"; 
import PropTypes from "prop-types";
import { Col, Row }  from "react-bootstrap";
import { Container } from "react-bootstrap";

import { FavoriteMovies } from "./favorite-movies";
import { UserInfo }  from "./user-info";
import { UpdateView } from "./updateView-func";
import { DeleteUser } from "./delete-user";



    export const ProfileView = ({user, setUser, movies, movie, token, updateUser, }) => {
        
        const [myUser, setMyUser] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [birthday, setBirthday] = useState("");
                
    //get users 
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                if (response.ok) {
                    console.log("User data retrieved")
                } else {
                    console.log("User data could not be retrieved.")
                }
                setMyUser(response.data);
                console.log(response);
        })
            .catch((error) => {
            console.error("An error ocurred" + error);
            });
    }, []);

    // Fav Movies
    const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id))
     // remove-fav_Movies 
     const removeFavMovie = async (movies) => {
        const user = localStorage.getItem("user");
        console.log(user);
        const token = localStorage.getItem("token");
        console.log(token);
        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/favMovies/${movies._id}` , {
            method: "DELETE",
            header: { Authorization: `Bearer ${token}` } 
        })
        .then((response) => {
            console.log(response);
            alert(`The Movie: ${movies.Title} was removed from Favorite List`)
            return response.json()
        })
        .catch(function (error) {
            console.error(" An error ocurred" + error);
            alert("Movie could not be removed.")
        });  
    }

    console.log(updateUser);
    console.log(user);
    return (
        <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col >
                        <UserInfo user={user}/>
                    </Col>
                    </Row> 
                    <Row className=" d-flex justify-content-center">
                        <DeleteUser user={user} />
                    </Row>
                   <Row className="d-flex justify-content-center p-4">
                        <Col >
                            <UpdateView user={user} updateUser={updateUser}/>
                        </Col>
                    </Row>
                    <Row className="fav-list">
                        <Col>
                            <FavoriteMovies movies={movies} removeFavMovie={removeFavMovie} user={user} updateUser={updateUser}/>
                        </Col>
                    </Row>
            </Container>
        ); 
};



ProfileView.propTypes = {
    user: PropTypes.object,
    setMyUser: PropTypes.string, 
    movies: PropTypes.array, 
    token: PropTypes.string,
    updateUser: PropTypes.func.isRequired,
    removeFavMovie: PropTypes.func,
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Director: PropTypes.object,
        Genre: PropTypes.object,
        _id: PropTypes.string
      }),
}