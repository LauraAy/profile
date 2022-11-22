import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


const NavbarComponent = () => {
 return ( 
    <>
      <Navbar class="fixed-top" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>Laura Aydelotte</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/developer">
            <Nav.Link>Developer</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/manager">
            <Nav.Link>Manager</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/historian">
            <Nav.Link>Historian</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarComponent