import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = ({homepage}) => {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Bookstore</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {!homepage && 
      <>
      <Nav.Link href="mybooks">My Books</Nav.Link>
      <Nav.Link href="myrequests">My Requests</Nav.Link>
      <Nav.Link href="myinformation">My Information</Nav.Link>
      </>
      }
    </Nav>
    <Nav>
      <Nav.Link href="#deets">How to use it?</Nav.Link>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link href="#deets">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar