import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    // const { users, logOut } = useAuth();
    // const { users, logOut } = useAuth();

    const { user, logOut } = useAuth();
    return (
        <Navbar bg="light" expand="lg" sticky="top" variant="dark" bg="dark" >
            <Container>
                <Navbar.Brand href="#home">Dentist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/activites">Service</Nav.Link>
                    <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                    <Nav.Link as={Link} to="/abouts">About-dental</Nav.Link>
                    {user?.email ?
                        <Button variant="light" onClick={logOut}>Logout</Button>
                        : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;