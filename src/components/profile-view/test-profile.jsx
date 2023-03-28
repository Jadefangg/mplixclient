import  {React, useEffect, useState} from "react"; 
// import Form from "react-bootstrap/Form";
import { Col, ListGroup, ListGroupItem, Row}  from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import FavoriteMovies from "./favorite-movies";


    export const TestProfile= ({user, setUser, movies, token, onLoggedOut}) => {
        
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [birthday, setBirthday] = useState("");
        //get users 
    useEffect(() =>{
        const token = window.localStorage.getItem("token");
        axios.get(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {headers: {Authorization: `Bearer ${token}`}})
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error("An error ocurred" + error);
        });
    }, [user.Username, token]);
    
        //    update user function
        // implement function such as in userupdate file
            const handleSubmit= (event) => {
                event.preventDefault();
                const token = localStorage.getItem("token");
                const data = {
                    Username: username,
                    Password: password,
                    Email: email,
                    Birthday: birthday
                }
                axios.put(`https://movies-couch-api.vercel.app/users/${user.Username}`,
                data,
                {headers: {Authorization: `Bearer ${token}`}}
                )
                .then((response) =>{
                    console.log(response.data);
                    alert("Profile updated!");
            })
            .catch(function (error) {
                console.log(error);
            });
        };
        const handleUpdate = (e) => {
            e.preventDefault();
            setUsername(e.target.value);
            setPassword(e.target.value);
            setEmail(e.target.value);
            setBirthday(e.target.value);
        }   
    
    // delete user
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
                onLoggedOut();
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
    // Fav-movies 
    const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id)) 
    // remove-fav_Movies
  removeFavMovie = async (movies) =>{
    const user = localStorage.getItem("user");
    console.log(user);
    const token = localStorage.getItem("token");
    console.log(token);
    axios.delete(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movies._id}`,
    {header: {Authorization: `Bearer ${token}`}}
    ) 
    .then((response) => {
        console.log(response);
        alert(`The Movie: ${movies._id} was removed from Favorite List`)
    })
    .catch(function (error) {
        console.error(" An error ocurred" +error);
    })
 }


    return (
        <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col >
                        <Card>
                            <Card.Body className="profile-view">
                            <>
                             <h3>Username:</h3>
                             <p >{user.Username}</p>
                             <br/>
                             {/* <h3>Password:</h3>
                             <p >{setPassword}</p>
                             <br/> */}
                             <h3>Email:</h3>
                             <p >{user.Email}</p>
                             <br/>
                             <h3 >Birthday:</h3>
                             <p >{user.Birthday.slice(0,10)}</p>
                             <br/>
                            </>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row> 
                   <Row className="d-flex justify-content-center p-4">
                        <Col >
                            <Card>
                                <Card.Body className="form-profile">
                                    <Card.Title>Profile Information</Card.Title>
                                    <Card.Text></Card.Text>
                                    <ListGroup>
                                        <form onSubmit={handleSubmit}>
                                            <ListGroup.Item>
                                            <label>
                                                Username:
                                                <input 
                                                type="text"
                                                name="username"
                                                class=""
                                                // value={user.Username}
                                                onChange={(e) => handleUpdate(e)}
                                                /> 
                                            </label>
                                            </ListGroup.Item>
                                            <br/>
                                           <ListGroup.Item>   
                                            <label>
                                                Password:
                                                <input 
                                                type="password"
                                                name="password"
                                                class=""
                                                // value={user.Password}
                                                onChange={(e) => handleUpdate(e)}
                                                 />
                                            </label>
                                            </ListGroup.Item> 
                                            <br />
                                            <ListGroup.Item>  
                                            <label>
                                                Email:
                                                <input 
                                                type="email"
                                                name="email"
                                                class=""
                                                // value={user.Email}
                                                onChange={(e) => handleUpdate(e)}  
                                                />
                                            </label>
                                            </ListGroup.Item>   
                                            <br />
                                            <ListGroup.Item>
                                            <label>
                                                Birthday: 
                                                <input 
                                                type="date" 
                                                name="birthday"
                                                class=""
                                                // value={user.Birthday}
                                                onChange={(e) => handleUpdate(e)}
                                                 />
                                            </label>
                                            </ListGroup.Item>
                                            <br />
                                            <ListGroup.Item>
                                            <button  type="submit" class="" onChange={()=> updateUser()}>Update User</button>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                            <button type="submit" class="" onChange={()=> deleteUser()} >Delete User</button>
                                            </ListGroup.Item>
                                        </form>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* <FavoriteMovies /> */}
                        {/* <Button onClick={removeFavMovie} className="movie-card-button">Remove from Favorite List</Button> */}
                        </Col>
                    </Row>
            </Container>
        ); 
};
// TestProfile.propTypes = {
//     user: Proptypes.shape({
//     _id: Proptypes.number.isRequired,
//     username: Proptypes.string.isRequired,
//     password: Proptypes.string.isRequired,
//     email: Proptypes.string.isRequired,
//     birthday: Proptypes.date.isRequired
// })
// };