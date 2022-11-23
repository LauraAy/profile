import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";

const image = require('./Headshot3.jpg')

const AboutCard = () => {
 return ( 
  <Container>
    <Row>
      <Col xsm={12} sm={12} md={12} lg={4}>
        <Image src={image} alt="Photograph of woman in white blouse." width="100%"/>
      </Col>
      <Col xsm={12} sm= {12} md={12} lg={8}>
        <Container >
          <div class="blend_card">
          <Card.Body>
              <Card.Title>Laura Aydelotte</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Developer, Project Manager, Book and Media Historian</Card.Subtitle>
              <Card.Text>
              I'm a full stack developer dedicated to creating user centered applications with an elegant blend form and function. My coding skills grew out of my experience as a project manager guiding projects through the lifecycle from start to completion. My understanding of both technical practice and larger level project needs makes me adept at both building projects with creative solutions in response to user needs and fostering communication and collaboration between the user and development sides. 
              <br></br>
              <br></br>
              With a Master's in Library and Information Science, a fullstack coding certificate from UC Irvine, and a PhD specializing in book and media history, I know how to work with both big data and big ideas. I offer a unique blend of expertise and experience to libraries, universities and other parts of the higher education and cultural heritage sector, and I bring a fresh creative perspective and innovative problem solving approach to a variety of other industries. 
              <br></br>
              <br></br>
              Get the overview of my experience with my <button>Resume</button> or <button>CV</button>. 
              <br></br>
              Or click on an option below to see more of my online portfolio.
              </Card.Text>
          </Card.Body>
          </div> 
         </Container>
      </Col>
    </Row>
  </Container>

 
  )
}

export default AboutCard