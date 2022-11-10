import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {
//   Link
// } from 'react-router-dom'


const NavbarComponent = () => {
 return ( 
    <>
      <Navbar class="fixed-top">
        <Container>
          <Navbar.Brand href="#home">Laura Aydelotte</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Developer">Developer</Nav.Link>
            <Nav.Link href="#Project Manager">Project Manager</Nav.Link>
            <Nav.Link href="#Project Manager">Book Historian</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent