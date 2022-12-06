import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Recipe from './logo_mrb.png'
import Garden from './GardenArray.png';



const DevPortfolio = () => {
    return (
<>
<Container>
<div class="blend_card">
<Card.Body>
    <Card.Title>
    Select Applications and Datasets
    </Card.Title>
</Card.Body>
</div>

<div class="blend_card2"></div>
        <Row xs={1} md={2} className="blend_card">
          <Col>
            <div class="blend_card2">
            <Card.Img variant="top" src={Recipe}/>
            <Card.Body>
              <Card.Title>Recipe Box App</Card.Title>
              <hr></hr>
              <Card.Text>
                A React Application for entering and storing recipes. 
              </Card.Text>
              <a href="" class='btn btn-primary m-2'>Recipe Box App</a>
              <a href = "https://github.com/LauraAy/recipeBox" class='btn btn-primary'>Recipe Box Github</a>
            </Card.Body>
            </div>
          </Col>
         
          
          <Col>
          <div class="blend_card">
          <Container>
          <Card.Img variant="top" src={Garden}/>
            <Card.Body>
              <Card.Title>Garden Array App</Card.Title>
              <hr></hr>
              <Card.Text>
                A React Application for keeping track of plants in your garden.
              </Card.Text>
              <a href="https://github.com/LauraAy/GardenArray" class='btn btn-primary'>Garden Array Github</a>
            </Card.Body>
            </Container>
            </div>

          </Col>

        <Col>
          <div class="blend_card">
          <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Philadelphia Playbills Project</Card.Title>
              <Card.Text>
                A Ruby on Rails application for crowdsourcing images and metadata for the Provenance Online Project (POP) at Penn Libraries. I contributed to front end code and search capabability in collaboration with the senior developer.
              </Card.Text>
              <Card.Link class="link-light" href="https://github.com/LauraAy/subpop">POP Github</Card.Link>
            </Card.Body>
            </div>
          </Col>
          <Col>
          <div class="blend_card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Philadelphia Playbills Project</Card.Title>
              <Card.Text>
                The JSON data set that was the product of a year long NEH grant project I directed. 
              </Card.Text>
              <Card.Link class="link-light" href="https://github.com/LauraAy/philadelphia_playbills">Playbills Github</Card.Link>
            </Card.Body>
        </div>
        </Col>

        </Row>
        </Container>
        </>
    );
  }

       
      
        
        

   

export default DevPortfolio