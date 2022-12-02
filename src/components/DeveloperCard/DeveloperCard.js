import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import SkillList from '../../components/SkillList';
// import DataSkills from '../../components/DataSkills';

const DeveloperCard = () => {
    return (
<Container>
    <div class="blend_card">
        <Card.Body>
            <Card.Title>
            Development and Data Work
            </Card.Title>
            I offer fullstack application development, specializing in Javascript and React, with additional experience with Python and Ruby on Rails. Familiar with both SQL and mongoDB. Also experienced in producing and curating data and metadata. 
            <br></br>
            <br></br>
            <h4>Skills</h4>
                <SkillList />
            {/* <h4>Data Curation Skills</h4>
                <DataSkills /> */}


                {/* <ul>
                    <li style="display:inline">JavaScript</li>
                    <li style="display:inline">React</li>
                    <li style="display:inline">Python</li>
                    <li style="display:inline">Ruby on Rails</li>
                    <li style="display:inline">HTML</li>
                    <li style="display:inline">JXS</li>
                    <li style="display:inline">CSS</li>
                    <li style="display:inline">SASS</li>
                    <li style="display:inline">SQL</li>
                    <li style="display:inline">mongoDB</li>
                </ul> */}

            <Card.Text>


            </Card.Text>
        </Card.Body>
    </div>
</Container>

    )
}
    
export default DeveloperCard
