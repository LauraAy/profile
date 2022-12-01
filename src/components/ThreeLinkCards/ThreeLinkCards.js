import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Image from "react-bootstrap/Image";
import { Card } from 'react-bootstrap';

const devIcon = require('./developer.png')
const managerIcon= require('./planning.png')
const historianIcon= require('./teacher.png')

const ThreeLinkCards = () => {
    return ( 

<div class="container mt-3">
    <div class="row" width="100%"> 
    <div class="col-sm blend_card">
    <Card.Body>
    <LinkContainer to="/developer" role="button">
        <Image src={devIcon} max-width="40px"></Image>
    </LinkContainer>
    <LinkContainer to="/developer" role="button">
        <Card.Title>Developer</Card.Title>
        </LinkContainer>
    <hr></hr>
    <Card.Text>
    <LinkContainer to="/developer" role ="button">
        <p>
        Interested in the code? Click here to see a sample of my development work.
        </p>
    </LinkContainer> 
        <ul>
            <li>Javascript & React</li>
            <li>Ruby on Rails</li>
            <li>SQL</li>
            <li>Data Management</li>
            <li>and more...</li>
        </ul> 
        </Card.Text>
        </Card.Body> 
    </div>


    <div class="col-sm blend_card">
    <Card.Body>
    <LinkContainer to="/manager" role="button">
        <Image src={managerIcon} max-width="40px"></Image>
    </LinkContainer>
    <LinkContainer to="/manager" role="button">
        <Card.Title>Project Manager</Card.Title>
    </LinkContainer>  
        <hr></hr>
    <Card.Text>
    <LinkContainer to="/manager" role ="button">
        <p>
        Looking for a project manager? Click here to learn more about my management experience.
        </p>
     </LinkContainer> 
        <ul>
            <li>Agile and Scrum</li>
            <li>Grant Writing Experience</li>
            <li>Collaboration and Communication</li>
            <li>and more...</li>
        </ul>  
        </Card.Text>
        </Card.Body>
    </div>

    <div class="col-sm blend_card">
    <Card.Body>
    <LinkContainer to="/historian" role="button">
        <Image src={historianIcon} max-width="40px"></Image>
    </LinkContainer>
    <Card.Title>
    <LinkContainer to="/historian" role="button">
        <h4>Curator & Historian</h4>
        </LinkContainer>  
        </Card.Title>
        <hr></hr>
        <Card.Text>
        <LinkContainer to="/historian" role ="button">
        <p>
        Click here to learn more about my experience as a curator and historian of book and media history.
        </p>
        </LinkContainer> 
        <ul>
            <li>Special Collections Curator</li>
            <li>Early Modern Scholar</li>
            <li>Provenance Expert</li>
            <li>and more...</li>
        </ul> 
        </Card.Text>
        </Card.Body> 
    </div>
    </div>
</div>

 )
}

export default ThreeLinkCards