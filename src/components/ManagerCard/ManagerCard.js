import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ManageSkillList from '../../components/ManageSkillList';

const ManagerCard = () => {
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
            the University of Pennsylvania and Princeton University, with prior experience in Program and Event Management at the Newberry Library.
            I bring a strong set of communication and organizational skills to ensure that the project is guided smoothly
            from initiall planning conversations with stakeholders, to smart resource allocation, risk management strategies, and setting up productive timelines and workflows that will 
            take your project from ideas to successful reality. I am currently enrolled in the Calbright Project Management program, which is keeping me up to date on the most 
            current project management techniques in preparation for future PMP certification. 

             </Card.Text>

                <ManageSkillList />
        </Card.Body>
    </div>
</Container>
</>
    )
}
    
export default ManagerCard