import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top" variant="dark" bg="dark" >
            <Container>
                <Navbar.Brand href="#home">Dentist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/activites">Activites</Nav.Link>
                    <Nav.Link href="/doctors">Doctors</Nav.Link>
                    <Nav.Link href="/abouts">About</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;