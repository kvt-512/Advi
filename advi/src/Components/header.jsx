import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand path="home">ADVI</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link path="home">Home</Nav.Link>
                        <Nav.Link path="about">About Us</Nav.Link>
                        <Nav.Link path="ventures">Our Ventures</Nav.Link>
                        <Nav.Link path="business">International Business</Nav.Link>
                        <Nav.Link path="toys">Toys</Nav.Link>
                        <Nav.Link path="products">Products</Nav.Link>
                        <Nav.Link path="careers">Careers</Nav.Link>
                        <Nav.Link path="contact">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;