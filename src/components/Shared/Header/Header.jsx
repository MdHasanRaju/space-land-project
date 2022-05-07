import React from "react";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './../../../assets/images/background.png'

const Header = () => {
  return (
    <div>
      <Navbar  className="nav-color" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="link-color" as={Link} to="/"><img height='40px' width='125px' src={logo} alt="space-land" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link as={Link} to="/home" className="link-color">Home</Nav.Link>
              <Nav.Link as={Link} to="/characters" className="link-color">Characters</Nav.Link>
              <Nav.Link as={Link} to="/about" className="link-color">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="link-color">Contact</Nav.Link>
            
            </Nav>
            <Nav >
              <Nav.Link className="link-color" as={Link} to="/login">Login</Nav.Link>
              <Nav.Link className="link-color" as={Link} eventKey={2} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
