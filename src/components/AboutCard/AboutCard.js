import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {
//   Link
// } from 'react-router-dom'
// const image = require('./head_shot.JPG')

const AboutCard = () => {
 return ( 
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  <h2 class="text-primary" >New Page coming soon!</h2>
  
    </>
  )
}

export default AboutCard