import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import POP from './POPImage.png'
import Playbills from './PlaybillsImage.png'
import Indic from './IndicMss.jpg'
import PlaybillsDig from './playbills.jpg'

const ManagerPortfolio = () => {
    return (
<>
<Container className="blend_card2">
    <Card.Title>Selected Digital Projects</Card.Title>
    <Row xs={1} md={2} className="blend_card2">
        <Col>
            <Container class="blend_card2">
                <a href="https://provenanceonlineproject.wordpress.com/about/">
                <Card.Img variant="top" src={POP} style={{width: "100%", maxHeight: "220px"}}/>
                </a>
                <Card.Body>
                <Card.Title>The Provenance Online Project</Card.Title>
                <hr></hr>
                <Card.Text>
                Description: The Provenance Online Project, or POP, based at Penn Libraries, is designed to 
                document the past ownership of books ranging from medieval manuscripts to the present day. POP enables users to upload images of evidence 
                pointing to who owned the book before such as bookplates, inscriptions, or stamps and then allows others to view the images and 
                help identify the owners of the books. 
                <br></br>
                <br></br>
                Contributions: 
                <ul>
                    <li>Led a project team consisting of developers, catalogers, curators, and 
                    digital humanities experts</li>
                    <li>Supervised between 2-4 direct reports (part time)</li>
                    <li>Established metadata standards for the project in coordination with emerging national and international provenance standards</li>
                    <li>Supervised the transfer and cleanup of legacy images and 
                    metadata from the project's beginnings on Flickr</li>
                    <li>Supervised data creation, cleanup, QC, and long term preservation </li>
                    <li>Wrote requirements for and supervized the development of an application to upload images and metadata to a project database</li>
                    <li>Promoted the project through presentations, social media, and the project blog</li>
                    <li>Established collaborations with over a dozen research libraries from across the country to help test and contribute to the project.</li>  
                </ul>
                </Card.Text>
                <a href="https://provenanceonlineproject.wordpress.com/about/" class='btn btn-primary'>POP Blog</a>
                </Card.Body>
            </Container>
        </Col>

        <Col>
            <Container class="blend_card2">
                <a href="https://philadelphiaplaybills.wordpress.com/">
                <Card.Img variant="top" src={Playbills} style={{maxHeight: "220px"}} />
                </a>
                <Card.Body>
                    <Card.Title>Philadelphia Playbills Project</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    Description: The Philadelphia Playbills Project was an NEH funded project
                    based at Penn Libraries. The project used a sample set of 670 playbills (see digitization projects below)
                    and created a data model for transcribing performance information from the playbills
                    in a structured data format, as well as providing URI's where possible to enable 
                    Linked Open Data capabilities. 
                    <br></br>
                    <br></br>
                    Contributions:
                    <ul>
                        <li>Wrote the NEH grant and acted as Principal Investigator</li>
                        <li>Supervized three direct reports (part-time)</li>
                        <li>Managed project funding and wrote financial reports</li>
                        <li>Created the project data model</li>
                        <li>Supervised the transcription of playbills and input of additional data</li>
                        <li>Supervised the creation, clean-up, QC, and long term preservation plan for the final JSON data set </li>
                        <li>Promoted the project through presentations, social media, and the project blog</li>
                        <li>Organized a capstone conference on playbills and theater history, bringing together 
                        librarians and scholars from around the country</li>
                    </ul>
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
            <Card.Img variant="top" src={Indic} style={{maxHeight: "220px"}}/>
            </a>
                <Card.Body>
                    <Card.Title>Indic Manuscripts</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    Description: A CLIR funded project to digitize 2,876 Indic Manuscripts, spanning from the 16th to the 20th century 
                    in the Penn Libraries Collection. 
                    <br></br>
                    <br></br>
                    Contributions
                    <ul>
                        <li>Coordinated  work between conservators, catalogors, photographers,
                        manuscript curators, and data curators</li>
                        <li>Supervised the production of images and metadata, Quality Control, and the deployment of images
                        and metadata to Penn's website</li>
                        <li>Supervised the transfer of data to long term storage in Penn's Digital Repository</li>
                    </ul>
                    </Card.Text>
                    <a href="https://dla.library.upenn.edu/dla/medren/search.html?fq=collection_facet%3A%22Indic%20Manuscripts%22" class='btn btn-primary m-2'>Indic Manuscripts Images</a>
                </Card.Body>
            </Container>
        </Col>

        <Col>
            <Container class="blend_card2">
            <a href='http://dla.library.upenn.edu/dla/print/search.html?q=playbills'>
            <Card.Img variant="top" src={PlaybillsDig} style={{maxHeight: "220px"}}/>
            </a>
                <Card.Body>
                    <Card.Title>Furness Playbills</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    Description: A project to digitize 669 playbills from the Furness Shakespeare Library collection at Penn Libraries.
                    <br></br>
                    <br></br>
                    Contributions:
                    <ul>
                        <li>Procured internal funding for the project</li>
                        <li>Coordinated  work between conservators, catalogors, photographers, and data curators</li>
                        <li>Supervised the production of images and metadata, Quality Control, and the deployment of images
                        and metadata to Penn's website</li>
                        <li>Supervised the transfer of data to long term storage in Penn's Digital Repository</li> 
                    </ul>

                    </Card.Text>
                    <a href="http://dla.library.upenn.edu/dla/print/search.html?q=playbills" class='btn btn-primary m-2'>Playbills Images</a>
                </Card.Body>
            </Container>
        </Col>
    </Row>
</Container>
</>
    )
}



export default ManagerPortfolio