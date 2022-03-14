import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Header = () => {
  //LOCAL STATE
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <Navbar bg={!scroll ? 'black' : 'dark'} variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand path="home">ADVI</Navbar.Brand>
        <Nav className="justify-content-end">
          <Link
            to="home"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            Home
          </Link>
          <Link
            to="about"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            About Us
          </Link>
          {/* <Link
            to="ventures"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            Our Ventures
          </Link> */}
          {/* <Link
            to="business"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            International Business
          </Link> */}
          <Link
            to="toys"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            Toys
          </Link>
          <Link
            to="products"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            Products
          </Link>
          <Link
            to="career"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            Careers
          </Link>
          <Link
            to="contacts"
            activeClass="active"
            style={{ textDecoration: "none" }}
            className="text-secondary p-2"
            smooth={true}
            scroll={true}
            duration={500}
            role="button"
          >
            Contact Us
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
