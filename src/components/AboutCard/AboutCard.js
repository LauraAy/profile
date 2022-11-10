import React from 'react'
import Card from 'react-bootstrap/Card';

// import {
//   Link
// } from 'react-router-dom'
// const image = require('./head_shot.JPG')

const AboutCard = () => {
 return ( 
   <div class="blend_card" style={{width: "60rem"}} >
      <Card.Body>
        <Card.Title>Laura Aydelotte</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Developer, Project Manager, Media Historian</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </div>
 
  )
}

export default AboutCard