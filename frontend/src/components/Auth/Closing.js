import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Closing = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#features">Copyright © 2021 BookStore | Powered by Shreehar01</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link>Terms</Nav.Link>
      <Nav.Link>Privacy Policy</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Closing;
