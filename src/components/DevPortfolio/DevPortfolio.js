import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Recipe from './logo_mrb.png';
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
                <Container class="blend_card2">
                    <a href='https://github.com/LauraAy/recipeBox'>
                    <Card.Img variant="top" src={Recipe} style={{maxHeight: "180px"}}/>
                    </a>
                    <Card.Body>
                        <Card.Title>Recipe Box App</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        A React Application for entering and storing recipes. 
                        </Card.Text>
                        <a href="" class='btn btn-primary m-2'>Recipe Box App</a>
                        <a href = "https://github.com/LauraAy/recipeBox" class='btn btn-primary'>Recipe Box Github</a>
                    </Card.Body>
                </Container>
            </Col>

            <Col>
                <Container class="blend_card2">
                    <a href = "https://github.com/LauraAy/GardenArray">
                    <Card.Img variant="top" src={Garden} style={{ maxHeight: "180px"}}/>
                    </a>
                    <Card.Body>
                        <Card.Title>Garden Array App</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        A React Application for keeping track of plants in your garden.
                        </Card.Text>
                        <a href="https://github.com/LauraAy/GardenArray" class='btn btn-primary'>Garden Array Github</a>
                    </Card.Body>
                </Container>
            </Col>

            <Col>
                <Container class="blend_card2">
                    <a href="https://github.com/LauraAy/subpop">
                    <Card.Img variant="top" src={POP} style={{width: "100%", maxHeight: "180px"}}/>
                    </a>
                    <Card.Body>
                        <Card.Title>The Provenance Online Project</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        A Ruby on Rails application for crowdsourcing images and metadata for the Provenance Online Project (POP) at Penn Libraries. I contributed to front end code and search capabability in collaboration with the senior developer.
                        </Card.Text>
                        <a href="https://github.com/LauraAy/subpop" class='btn btn-primary'>POP Github</a>
                    </Card.Body>
                </Container>
            </Col>

            <Col>
                <Container class="blend_card2">
                    <a href="https://github.com/LauraAy/philadelphia_playbills">
                    <Card.Img variant="top" src={Playbills} style={{maxHeight: "180px"}} />
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