import React, {useEffect, useState} from "react"; 
import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserInfo from "./user-info"; 
import { FavoriteMovies } from "./favorite-movies";
import UpdateUser from "./update-user";

export function ProfileView({  movies }) {
    const [user, setUser] = useState({
        Username:"",
        Password:"",
        Email:"",
        FavoriteMovies: []
    })
    const favoriteMovieList = movies.filter((movies) =>{
    return user.FavoriteMovies.includes(movies._id);
})
const getUser = () => {}
    useEffect(() => {
        let isMounted = true;
        isMounted && getUser;
        return () => {
            isMounted = false;
        }
    } , [])
}
return(
    <Container>
        <Row> 
            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                    <UserInfo name={user.Username} email={user.email} />
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6}>
                <Card>
                    <Card.Body>
                        <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate}/>
                    </Card.Body>
                </Card>
            </Col>
            <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
        </Row>
    </Container>

)