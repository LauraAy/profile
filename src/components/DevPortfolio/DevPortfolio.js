import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Recipe from './YWC-rectangle-logo.png';
import Garden from './GardenArray.png';
import POP from './POPImage.png'
import Playbills from './PlaybillsImage.png'

const DevPortfolio = () => {
    return (
<>
<Container className="blend_card2">
    <Card.Title>Select Applications and Datasets</Card.Title>
        <Row xs={1} md={2} className="blend_card2">
            <Col>
                <Container className="blend_card2">
                    <a href='http://www.yourworldcookbook.com'>
                    <Card.Img variant="top" src={Recipe} style={{maxHeight: "220px"}}/>
                    </a>
                    <card border='light'>
                    <Card.Body>
                        <Card.Title>Your World Cookbook</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        A fullstack javascript application for entering recipes and attaching information about the region the recipe is from and more. React frontend and a backend built with a MySQL database using node.js, express, and sequelize.  
                        </Card.Text>
                        <a href="http://www.yourworldcookbook.com" class='btn btn-primary m-2'>Website</a>
                        <a href = "https://github.com/LauraAy/Your-World-Cookbook" class='btn btn-primary'>Github</a>
                    </Card.Body>
                    </card>
                </Container>
            </Col>

            <Col>
                <Container className="blend_card2">
                    <a href="https://github.com/LauraAy/subpop">
                    <Card.Img variant="top" src={POP} style={{width: "100%", maxHeight: "220px"}}/>
                    </a>
                    <Card.Body>
                        <Card.Title>The Provenance Online Project</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        A Ruby on Rails application for crowdsourcing images and metadata for the Provenance Online Project (POP) at Penn Libraries. I co-created the data model for the project, and contributed to front end code and search capabability in collaboration with the senior developer.
                        </Card.Text>
                        <a href="https://github.com/LauraAy/subpop" class='btn btn-primary'>POP Github</a>
                    </Card.Body>
                </Container>
            </Col>

            <Col>
                <Container className="blend_card2">
                    <a href="https://github.com/LauraAy/philadelphia_playbills">
                    <Card.Img variant="top" src={Playbills} style={{maxHeight: "220px"}} />
                    </a>
                    <Card.Body>
                        <Card.Title>Philadelphia Playbills Project</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        The JSON data set that was the product of a year long NEH grant project I directed. 
                        </Card.Text>
                        <a href="https://github.com/LauraAy/philadelphia_playbills" class='btn btn-primary'>Playbills Github</a>
                    </Card.Body>
                </Container>
            </Col>
        </Row>
    </Container>
</>
    );
}

export default DevPortfolio