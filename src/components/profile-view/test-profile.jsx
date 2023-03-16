import React, {useEffect, useState} from "react"; 
import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Button, Card, Container } from "react-bootstrap";


// import UserInfo from "./user-info"; 
// import UpdateUser from "./update-user";
// import FavoriteMovies from "./favorite-movies";

    export const TestProfile= ({user, movies, token}) => {
           const [user, setUset] = useState({
            username: "",
            password: "",
            email: "",
            birthday: ""
        });
        setUser({
            ...user,
            username: "newUsername"
          }); //could be integrated to edit function
          
        // const [user, setUser] = setState([]);
   // user related functions
    // useEffect(() => {
    //     const user= JSON.parse(localStorage.getItem("user"));
    //     if (user) {setUser(user);}

        // if(!user && !token) {
        //     return window.open("/", "_self")}
    // }, [])
    // get uSer
    // function getUser(username) {
        //   Make a request to retrieve user data from API
        //   return fetch(`/users/${username}`)
        //   .then(response => response.json())
        //   .then(data => {
            // Extract user information from the response and return it as an object
        //     const { username, password, email, birthday } = data;
        //     return { username, password, email, birthday };
        //   })
        //   .catch(error => {
        //     console.error(`Error retrieving user: ${username}: `, error);
        //   });
        // }
        // const [updateUser, setUpdateUser] = useState(false);
            
    // update user
    function editUser() {
        const [formData, setFormData] = useState({username:"", password: "", email: "", birthday:""}); 
        const handleChange = (event) => {
            const {username, value} = event.target;
            setFormData((prevFormData) => ({...prevFormData, [username]:value}))
        };
        const handleSubmit =  (event) => {
            event.preventDefault();
            alert(`Username: ${formData.username}, Password: ${formData.password}, Email: ${formData.email}, Birthday: ${formData.birthday}`)
        } 
    };
    
    // delete user
    // const handleDeleteUser = async () => {
    //     try {
    //         const response = await fetch(
    //             `https://movies-couch-api.vercel.app/users/${user.username}`,
    //             {
    //                 method: "DELETE",
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );
    //         const { success, message, data } = await response.json();
    //         if (success) {
    //             onDelete();
    //         } else {
    //             alert(message);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("submitted");
    // }

    // favorite-movies functions
    // const onRemoveFavorite = (_id) => {}
    // const handleEdit = async (event) => {
    //     event.preventDefault();
    //     const userData={
    //         username: username,
    //         password: password,
    //         email: email,
    //         birthday: birthday
    //     }; 
        // console.log(userData)
    //     try {
    //         const response = await fetch(
    //             `https://movies-couch-api.vercel.app/users/${user.username}`,
    //             {
    //                 method: "PUT",
    //                 body: JSON.stringify(userData),
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );
    //         const { success, message, data } = await response.json();
    //         if (success) {
    //             alert(message);
    //             setUpdateUser(false);
    //         } else {
    //             console.error(message);
    //             alert("Update failed");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const favoriteMovies = movies.filter(m => {
    //     user.favoriteMovies.includes(m._id);
    // }); //fav mov only needs from there a button

    // log-out function
    // onLoggedOut = () =>  {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     this.setState({ user:null });
    //     window.open("/", "_self")
    // } 
    // useEffect(() => {
    //     if (birthdayInputRef.current) {
    //         birthdayInputRef.current.value = formatDate(birthday);
    //     }
    // }, [updateUser])

    // const formatDate = (birthday) => {
    //     const date = new Date(birthday);
    //     const year = date.getFullYear();
    //     let month = date.getMonth() + 1;
    //     let dayOfTheMonth = date.getDate();
    //     if (month < 10) {
    //         month = `0${month}`;
    //     }
    //     if (dayOfTheMonth < 10) {
    //         dayOfTheMonth = `0${dayOfTheMonth}`;
    //     }
    //     return `${year}-${month}-${dayOfTheMonth}`;
    // };

    return (
        <React.Fragment>
            <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col xs={12} sm={4} md={6} lg={6} >
                        <Card>
                            <Card.Body clasName="user-profile">
                            <>
                             <h3>Username</h3>
                             <p >{user.Username}</p>
                             <br/>
                             <h3>Password</h3>
                             <p >{user.Password}</p>
                             <br/>
                             <h3>Email</h3>
                             <p >{user.Email}</p>
                             <br/>
                             <h3 >Birthday</h3>
                             <p >{user.Birthday}</p>
                             <br/>
                            </>
                            </Card.Body>
                            <Button className="edit-button"
                                variant="primary"
                                // onClick={() => setUpdateUser(true)}
                                >EDIT
                            </Button>
                        </Card>
                    </Col>
                    </Row> 
                   <Row className="d-flex justify-content-center p-4">
                        <Col sm={8} md={6} lg={5} xl={4} xxl={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Profile Information</Card.Title>
                                    <Card.Text></Card.Text>
                                    <form onSubmit={editUser} className="w-100">
                                        <label htmlFor="username"></label>
                                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}></input>
                                        <br/>
                                        <label htmlFor="password"></label>
                                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}></input>
                                        <br/>
                                        <label htmlFor="email"></label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}></input>
                                        <br/>
                                        <label htmlFor="birthday"></label>
                                        <input type="date" id="birthday" name="birthday" value={formData.birthday} onChange={handleChange}></input>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* <Row className="justify-content-center py-5">
                    <h2 className="text-center mb-5">Favorite Movies</h2>
                    {favoriteMovies.length ? (
                        favoriteMovies.map((movie) => (
                            <MovieCard
                                movie={movie}
                                isFavorite={true}
                                toggleFavorite={handleToggle}
                                _id={movie._id}
                            />
                        ))
                    ) : (
                        <p>No favorite movies</p>
                    )}
                </Row> */}
        </Container>
    </React.Fragment>
    );
};
