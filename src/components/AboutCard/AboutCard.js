import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";

const image = require('./Headshot3.jpg')
const resume = require('./Aydelotte_resume_tech.pdf')
const cv = require('./Aydelotte_CV.pdf')

const AboutCard = () => {
 return ( 
  <>

  <Container>
    <Row>
      <Col xsm={12} sm={12} md={12} lg={4}>
        <Container >
          <div class="blend_card">
            <Card.Body>
              <Card.Title><h1>Laura Aydelotte</h1></Card.Title>
              <Card.Subtitle className="mb-2">Developer, Project Manager, Book and Media Historian</Card.Subtitle>
      <div class="p-md-0 ps-5 pe-5">
              <Image  src={image} alt="Photograph of woman in white blouse." width="100%"/>
        </div>
            </Card.Body>
          </div>
        </Container>
      </Col>
      <Col xsm={12} sm= {12} md={12} lg={8}>
        <Container >
          <div class="blend_card">
          <Card.Body>
              <Card.Text>
              I'm a full stack developer who creates user centered applications with an elegant blend of form and function. 
              My technical skills grew out of my experience as a librarian with data management experience and as a project 
              manager guiding projects through their lifecycle from start to finish.  My understanding of both technical practice 
              and larger level project needs makes me adept at building applications with creative solutions in response to user needs 
              and fostering communication and collaboration between the user and development sides. 
              <br></br>
              <br></br>
              With a Master's in Library and Information Science, a fullstack coding certificate, and a PhD specializing in book and media history,
              I know how to work with both big data and big ideas. I offer a unique blend of expertise and experience to libraries, universities and 
              other parts of the higher education and cultural heritage sector, and I offer a fresh creative perspective and innovative problem 
              solving approach to a variety of other industries. 
              <br></br>
              <br></br>
              Get the overview of my experience with my <a href = {resume} target = "blank" class='btn btn-primary'>resume</a> or my <a href = {cv} target = "blank" class='btn btn-primary'>academic cv</a>
              <br></br>
              <br></br>
              Go straight to the code at my <a href ="https://github.com/LauraAy " class='btn btn-primary'>github</a>
              <br></br>
              <br></br>
              Or click on an option below to see more of my online portfolio.
              </Card.Text>
          </Card.Body>
          </div> 
         </Container>
      </Col>
    </Row>
  </Container>

  </>
  )
}

export default AboutCard