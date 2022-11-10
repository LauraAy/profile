import React from 'react'
import Card from 'react-bootstrap/Card';

// import {
//   Link
// } from 'react-router-dom'
// const image = require('./head_shot.JPG')

const AboutCard = () => {
 return ( 
  <div class="container fluid">
    <div class="row">
      <div class="col">
        <h2>Column</h2>
      </div>
      <div class="col">
        <div class="container fluid" >
        <div class="blend_card"  style={{ }}>
          <Card.Body>
            <Card.Title>Laura Aydelotte</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Developer, Project Manager, Book and Media Historian</Card.Subtitle>
            <Card.Text>
            I'm a full stack developer dedicated to creating user centered applications with an elegant blend form and function. My coding skills grew out of my experience as a project manager guiding projects through the lifecycle from start to completion. My understanding of both technical practice and larger level project needs makes me adept at both building projects with creative solutions in response to user needs and fostering communication and collaboration between the user and development sides. 
            <br></br>
            <br></br>
            With a Master's in Library and Information Science, and a PhD specializing in book and media history, I offer a particular blend of expertise that knows how to work with both big data and big ideas. This background means I offer a unique blend of specialized knowledge to libraries, universities and other parts of the cultural heritage sector, and I bring a fresh creative perspective and innovative problem solving approach to a variety of other industries. 

            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
         </div> 
         </div>
      </div>
    </div>
  </div>
 
  )
}

export default AboutCard