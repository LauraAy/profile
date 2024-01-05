import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { Card } from 'react-bootstrap';

const devIcon = require('./developer.png')
const managerIcon= require('./planning.png')
const historianIcon= require('./teacher.png')


const ThreeLinkCards = () => {
    let navigate = useNavigate();

    const developerNav = () => {
        navigate('/developer')
    }

    return ( 

<div class="container mt-3">
    <div class="row" width="100%"> 
    <div class="col-sm blend_card">
    <Card.Body>
    <Image src={devIcon} max-width="40px" onClick={developerNav}></Image>
    <container onClick={developerNav}>
        <Card.Title>Developer</Card.Title>
    <hr></hr>
    <Card.Text>
    <a href="/developer#top" role ="button" class="link-custom">
        <p>
        Interested in the code? Click here to see a sample of my development work.
        </p>
    </a> 
        <ul>
            <li>Javascript & React</li>
            <li>Ruby on Rails</li>
            <li>SQL</li>
            <li>Data Management</li>
            <li>and more...</li>
        </ul> 
        </Card.Text>
        </container>
        </Card.Body> 
    </div>


    <div class="col-sm blend_card">
    <Card.Body>
    <a href="/manager#top" role="button" class="link-custom">
        <Image src={managerIcon} max-width="40px"></Image>
    </a>
    <a href="/manager#top" role="button" class="link-custom">
        <Card.Title>Project Manager</Card.Title>
    </a>  
        <hr></hr>
    <Card.Text>
    <a href="/manager#top" role="button" class="link-custom">
        <p>
        Looking for a project manager? Click here to learn more about my management experience.
        </p>
        </a>
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
    <a href="/historian#top" role="button" class="link-custom">
        <Image src={historianIcon} max-width="40px"></Image>
    </a>
    <Card.Title>
    <a href="/historian#top" role="button" class="link-custom">
        <h4>Curator & Historian</h4>
        </a>  
        </Card.Title>
        <hr></hr>
        <Card.Text>
        <a href="/historian#top" role="button" class="link-custom">
        <p>
        Click here to learn more about my experience as a curator and historian of book and media history.
        </p>
        </a> 
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