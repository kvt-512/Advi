import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>ADVI GROUP</h5>
            <div className="text-secondary">
              Email: msnpv22@gmail.com | Mob: 1234579
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h4>OUR FAMILIES</h4>
            <Navbar className="flex-column">
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
                Vihanansudhan Technology LLP
              </Link>
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
                Adwiteya Technology
              </Link>
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
                Basaveshwara Educational Charitable trust
              </Link>
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
                ADVI Udyog HR Consulting Sevices
              </Link>
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
                VS Travels
              </Link>
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
                ADVI Bouncers
              </Link>
            </Navbar>
          </div>
          <div className="col-12 col-md-4">
            <h4>QUICK LINKS</h4>
            <Navbar className="flex-column">
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
              <Link
                to="contact"
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
              <Link
                to="services"
                activeClass="active"
                style={{ textDecoration: "none" }}
                className="text-secondary p-2"
                smooth={true}
                scroll={true}
                duration={500}
                role="button"
              >
                Services
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
              <a
                href="https://script.google.com/macros/s/AKfycby4d7n8VKdnoDKAKxxVRRxaRqiaUlWdf3F3gPIIHG103K0gmM6Qk7ClLYv8QBHlEkbY/exec"
                style={{ textDecoration: "none" }}
                className="text-secondary"
              >
                Employe Login
              </a>
            </Navbar>
          </div>
        </div>
        <hr />
        <div className="text-secondary">Copyright All Rights Reserved by ADVI Group of Companies</div>
      </div>
    </div>
  );
};

export default Footer;
