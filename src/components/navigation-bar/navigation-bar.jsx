import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import Link from "react-router-dom";

export const NavigationBar = ({user, onLoggedOut}) =>{
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Movies-Couch
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basci-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-var">
                        <Nav className="me-auto">
                            {!user && (
                                <>
                                <Nav.Link as={Link} to="/">
                                    Login={" "}
                                </Nav.Link>
                                <Nav.Link as={Link} to="/">
                                    Signup{" "}
                                </Nav.Link>
                                </>
                            )}
                            {!user && (
                                <>
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link onClick={onLoggedOut} >Logout</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}; 