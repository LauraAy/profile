import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ManageSkillList from '../../components/ManageSkillList';

const DeveloperCard = () => {
    return (
<>
<a name="top"/>
<Container>
    <div class="blend_card">
        <Card.Body>
            <h3>
            Project Manager
            </h3>
            <Card.Text>
            I offer 6 years of experience as a project manager, most recently leading app development and other cross-functional projects at 
            the University of Pennsylvania and Princeton University. I bring a strong set communication and organizational skills to ensure that the project is guided smoothly
            from initiall planning conversations with stakeholders, to smart resource allocation, risk management strategies, to experience setting up productive timelines and workflows that will 
            take your project from inception to success. 

             </Card.Text>

             <br></br>
             <br></br>
                <ManageSkillList />
        </Card.Body>
    </div>
</Container>
</>
    )
}
    
export default DeveloperCard