import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'

const ThreeLinkCards = () => {
    return ( 

<div class="container">
    <div class="row" width="100%"> 
    <div class="col-sm blend_card">
        <LinkContainer to="/developer" role="button">
        <h4>Developer</h4>
        </LinkContainer>  
        <hr></hr>
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
    </div>

    <div class="col-sm blend_card">
    <LinkContainer to="/manager" role="button">
        <h4>Project Manager</h4>
        </LinkContainer>  
        <hr></hr>
        <LinkContainer to="/manager" role ="button">
        <p>
        Looking for a project manager? Click here to learn more about my management experience.
        </p>
        </LinkContainer> 
        <ul>
            <li>Agile and Scrum</li>
            <li>Grant Writing Experience</li>
            <li>and more...</li>
        </ul>  
    </div>

    <div class="col-sm blend_card">
    <LinkContainer to="/historian" role="button">
        <h4>Curator & Historian</h4>
        </LinkContainer>  
        <hr></hr>
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
    </div>
    </div>
</div>

 )
}

export default ThreeLinkCards