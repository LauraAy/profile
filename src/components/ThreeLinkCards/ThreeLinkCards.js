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

    const managerNav = () => {
        navigate('/manager')
    }

    const historianNav = () => {
        navigate('/historian#top')
    }

    return ( 

<div class="container mt-3">
    <div class="row" width="100%"> 
        <div class="col-sm blend_card" onClick={developerNav}>
            <Card.Body>
                <Image src={devIcon} max-width="40px"></Image>
                <Card.Title>Developer</Card.Title>
                <hr></hr>
                <Card.Text>
                    <p>
                        Interested in the code? Click here to see a sample of my development work.
                    </p>
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

        <div class="col-sm blend_card" onClick={managerNav}>
            <Card.Body>
                <Image src={managerIcon} max-width="40px"></Image>
                <Card.Title>Project Manager</Card.Title>  
                <hr></hr>
                <Card.Text>
                    <p>
                        Looking for a project manager? Click here to learn more about my management experience.
                    </p>
                    <ul>
                        <li>Agile and Scrum</li>
                        <li>Grant Writing Experience</li>
                        <li>Collaboration and Communication</li>
                        <li>and more...</li>
                    </ul>  
                </Card.Text>
            </Card.Body>
        </div>

        <div class="col-sm blend_card" onClick={historianNav}>
            <Card.Body>
                <Image src={historianIcon} max-width="40px"></Image>
                <Card.Title>
                    <h4>Curator & Historian</h4> 
                </Card.Title>
                <hr></hr>
                <Card.Text>
                    <p>
                        Click here to learn more about my experience as a curator and historian of book and media history.
                    </p> 
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