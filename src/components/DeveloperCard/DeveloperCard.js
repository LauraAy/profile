import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import DevSkillList from '../../components/DevSkillList';
import DataSkillList from '../DataSkillList';

const DeveloperCard = () => {
    return (
<Container>
    <div class="blend_card">
        <Card.Body>
            <Card.Title>
            Development and Data Work
            </Card.Title>
            <Card.Text>
            I offer fullstack application development, specializing in Javascript and React, with additional experience with Python and Ruby on Rails. Familiar with both SQL and mongoDB. I also have a Master's in Library and Information Science with a speciality in data curation and experience creating and maintaining data and metadata. 
            <br></br>
            <br></br>
                <DevSkillList />
                <DataSkillList />
             </Card.Text>
        </Card.Body>
    </div>
</Container>

    )
}
    
export default DeveloperCard
