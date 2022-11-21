import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Link
} from 'react-router-dom'
// import {LinkContainer} from 'react-router-bootstrap'


const NavbarComponent = () => {
 return ( 
    <>
      <Navbar class="fixed-top">
        <Container>
          <Navbar.Brand to="/">
            Laura Aydelotte
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Developer">Developer</Link>
            </Nav.Link>
            {/* <Nav.Link as={Link} href="#Manager">Project Manager</Nav.Link>
            <Nav.Link as={Link} href="#Historian">Book Historian</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent