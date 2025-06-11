import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";

const image = require('./Headshot5.jpg')
const resume = require('./Aydelotte_resume_general.pdf')
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
      <div class="p-md-0 px-5">
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
              
I'm a Project Manager and Full Stack Developer with 6 years of experience leading digital projects, managing data, and writing code. My background includes roles at the University of Pennsylvania and Princeton, where I guided cross-functional teams from concept to launch, translating complex needs into technical requirements and writing code for both data management and application development in Javascript(Node, React), Python(Django), SQL, and more.


             
              <br></br>
              <br></br>              
              With a Master's in Library and Information Science, a PhD in book and media history, and a full stack coding certificate, I bridge the gap between users and developers—combining technical skill with big-picture thinking to build creative, user-focused solutions.

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