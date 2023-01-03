import { Link } from "react-router-dom";
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = () => {
  
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="mb-0">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/Service">Service</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Navbar.Brand  as={Link} to="/">PRIMARY FIRE PROTECTION</Navbar.Brand>
          </Container>
        </Navbar>
      </>
      );
    }

  export default Navigation;