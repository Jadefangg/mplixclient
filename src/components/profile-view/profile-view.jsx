import  {React, useEffect, useState} from "react"; 
import PropTypes from "prop-types";
import { Col, Row }  from "react-bootstrap";
import { Container } from "react-bootstrap";


import { FavoriteMovies } from "./favorite-movies";
import { UserInfo }  from "./user-info";
import { UpdateView } from "./update-user";
import { DeleteUser } from "./delete-user";



    export const ProfileView = ({user, setUser, movies, token, updateUser}) => {
        
        const [myUser, setMyUser] = useState("");
        // const [username, setUsername] = useState("");
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

    
    // remove-fav_Movies 
     const removeFavMovie = async (movies) => {
       const user = localStorage.getItem("user");
       console.log(user);
       const token = localStorage.getItem("token");
       console.log(token);
       fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movies._id}`,
       {
         method: "DELETE",
        header: {Authorization: `Bearer ${token}`}}
       ) 
       .then((response) => {
        if (response.ok) {
            alert(`The Movie: ${movies._id} was removed from Favorite List`)
            return response.json();
          } else {
            alert("Failed removing movie from Favorite list");
            return false;
          }
        })
       .catch(function (error) {
           console.error(" An error ocurred" + error);
           alert("Movie could not be removed.")
       })
    }


    return (
        <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col >
                        <UserInfo user={user}/>
                    </Col>
                    </Row> 
                   <Row className="d-flex justify-content-center p-4">
                        <Col >
                            <UpdateView user={user} updateUser={updateUser}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FavoriteMovies movies={movies} removeFavMovie={removeFavMovie} user={user}/>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center p-4">
                        <Col>
                            <DeleteUser user={user}/>
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
    updateUser: PropTypes.func,
    removeFavMovie: PropTypes.func,
}