import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import POP from './POPImage.png'
import Playbills from './PlaybillsImage.png'
import Indic from './IndicMss.jpg'




const ManagerPortfolio = () => {
    return (
<>
<Container className="blend_card2">
    <Card.Title>Selected Digital Projects</Card.Title>
    <Row xs={1} md={2} className="blend_card2">
        <Col>
            <Container class="blend_card2">
                <a href="https://provenanceonlineproject.wordpress.com/about/">
                <Card.Img variant="top" src={POP} style={{width: "100%", maxHeight: "250px"}}/>
                </a>
                <Card.Body>
                <Card.Title>The Provenance Online Project</Card.Title>
                <hr></hr>
                <Card.Text>
                The Provenance Online Project, or POP, based at Penn Libraries, is designed to 
                document the past ownership of books ranging from medieval manuscripts to the present day. POP enables users to upload images of evidence 
                pointing to who owned the book before such as bookplates, inscriptions, or stamps and then allows others to view the images and 
                help identify the owners of the books. I led a project team consisting of developers, catalogers, curators, and 
                digital humanities experts. I supervised the work of establishing a data model for the project, transferring legacy images and 
                metadata from the project's beginnings on Flickr into a sustainable format, and building an upload application to allow users to 
                contribute images and metadata to a project database. I also promoted the project, both in presentations and on social media, 
                and established collaborations with over a dozen research libraries from across the country to help test and contribute to the project. 
                </Card.Text>
                <a href="https://provenanceonlineproject.wordpress.com/about/" class='btn btn-primary'>POP Blog</a>
                </Card.Body>
            </Container>
        </Col>

        <Col>
            <Container class="blend_card2">
                <a href="https://philadelphiaplaybills.wordpress.com/">
                <Card.Img variant="top" src={Playbills} style={{maxHeight: "250px"}} />
                </a>
                <Card.Body>
                    <Card.Title>Philadelphia Playbills Project</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    The JSON data set that was the product of a year long NEH grant project I directed. I wrote and and acted as Principal Investigator for the grant, which included establishing the data schema for the project, supervising the transcription of information from playbill images in a structured data format, and converting the transcribed data into a JSON format. 
                    </Card.Text>
                    <a href="https://philadelphiaplaybills.wordpress.com/" class='btn btn-primary'>Playbills Blog</a>
                </Card.Body>
            </Container>
        </Col>
    </Row>
</Container>

<Container className="blend_card2">
    <Card.Title>Digitization Projects</Card.Title>
        <Row xs={1} md={2} className="blend_card2">
        <Col>
            <Container class="blend_card2">
            <a href='https://dla.library.upenn.edu/dla/medren/search.html?fq=collection_facet%3A%22Indic%20Manuscripts%22'>
            <Card.Img variant="top" src={Indic} style={{maxHeight: "250px"}}/>
            </a>
                <Card.Body>
                    <Card.Title>Indic Manuscripts</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    I administered the final year of the digitization of 2,876 Indic Manuscripts, spanning from the 16th to the 20th century. I coordinated work between conservation, cataloging, photography, metadata entry and clean-up, and deployment of the final images and data onto Penn's website and storage in the digital repository. 
                    </Card.Text>
                    <a href="https://dla.library.upenn.edu/dla/medren/search.html?fq=collection_facet%3A%22Indic%20Manuscripts%22" class='btn btn-primary m-2'>Indic Manuscripts</a>
                </Card.Body>
            </Container>
        </Col>

        <Col>
            <Container class="blend_card2">
            <a href='http://dla.library.upenn.edu/dla/print/search.html?q=playbills'>
            <Card.Img variant="top" src={'indic'} style={{maxHeight: "250px"}}/>
            </a>
                <Card.Body>
                    <Card.Title>Furness Playbills</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    I procurred internal funding for, and administered the digitization of 669 playbills from the Furness Shakespeare Library collection. I established the metadata schema for the cataloging of the playbills and coordinated work between conservation, cataloging, photography, metadata entry and clean-up, and deployment of the final images and data onto Penn's website and storage in the digital repository. 
                    </Card.Text>
                    <a href="http://dla.library.upenn.edu/dla/print/search.html?q=playbills" class='btn btn-primary m-2'>Indic Manuscripts</a>
                </Card.Body>
            </Container>
        </Col>
    </Row>
</Container>
</>
    )
}



export default ManagerPortfolio