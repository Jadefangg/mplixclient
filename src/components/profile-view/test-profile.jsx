import  {React, useEffect, useState} from "react"; 
// import Form from "react-bootstrap/Form";
import { Col, ListGroup, ListGroupItem, Row}  from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import FavoriteMovies from "./favorite-movies";


    export const TestProfile= ({user, setUser, movies, token}) => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [birthday, setBirthday] = useState("");
        //    update user function
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
                    // window.open(`/profile`, "_self");
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
     //get users 
    useEffect(() =>{
        const token = localStorage.getItem("token");
        axios.get(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {headers: {Authorization: `Bearer ${token}`}})
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [user.Username, token]);
    // delete user
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
        console.log(error);
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
                             <p >{username}</p>
                             <br/>
                             {/* <h3>Password:</h3>
                             <p >{setPassword}</p>
                             <br/> */}
                             <h3>Email:</h3>
                             <p >{email}</p>
                             <br/>
                             <h3 >Birthday:</h3>
                             <p >{birthday}</p>
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
                                                class=".li-element"
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
                                                class=".li-element"
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
                                                class=".li-element"
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
                                                class=".li-element"
                                                // value={user.Birthday}
                                                onChange={(e) => handleUpdate(e)}
                                                 />
                                            </label>
                                            </ListGroup.Item>
                                            <br />
                                            <ListGroup.Item>
                                            <button  type="submit" class=".li-element">Update User</button>
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
TestProfile.propTypes = {
    user: Proptypes.shape({
    _id: Proptypes.number.isRequired,
    username: Proptypes.string.isRequired,
    password: Proptypes.string.isRequired,
    email: Proptypes.string.isRequired,
    birthday: Proptypes.date.isRequired
})
};