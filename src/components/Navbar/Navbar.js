import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'


const NavbarComponent = () => {
 return ( 
    <>
      <Navbar expand="lg"  class="fixed-top" variant="dark">
        <Container>
          <Navbar.Brand href="/">Laura Aydelotte</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/developer">Developer</Nav.Link>
              <Nav.Link href="manager">Manager</Nav.Link>
              <Nav.Link href="historian">Historian</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent