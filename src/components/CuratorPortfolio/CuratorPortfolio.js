import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Wolfreston from './Wolfreston.png'
import Stratford from './stratford.jpeg'
import Hamlet from './Hamlet.jpg'

const CuratorPortfolio = () => {
    return (
        <>
        <Container className="blend_card2">
            <Card.Title>Language Skills</Card.Title>
            <ul>
                <li>Advanced Reading French</li>
                <li>Advanced Reading Italian</li>
                <li>Intermediate Spanish</li>
                <li>Intermediate Latin</li>
                <li>Basic Anglo Saxon (Old English)</li>
            </ul>
        </Container>
        <Container className="blend_card2">
            <Card.Title>Paleographic Skills</Card.Title>
            <ul>
                <li>Experienced in reading English manuscripts from the 14th to the
                17th centuries, including both italic and secretary hands throughout the period</li>
                <li>Summer institute in French paleography, Newberry Library, Summer 2012</li>
                <li>Intensive course in Medieval Latin paleography and codicology, Newberry Library, Fall 2011</li>
            </ul>
        </Container>
        <Container className="blend_card2">
            <Card.Title>Grant Writing</Card.Title>
            <ul>
                <li>Principal investigator, Linked Data for Philadelphia Theater History 
                One year NEH Digital Humanities Advancement grant ($75,000)</li>
                <li>Principal investigator, Mellon Microgrant for development of the Toolkit of Material Evidence (TOME), 2015-2016 ($6,925)</li>
            </ul>
        </Container>
        <Container className="blend_card2">
        <Card.Title>Exhibits</Card.Title>
        <Row xsm={2} className="blend_card2">
            <Col xsm={6} md={2}>
            <Card.Img Variant="left" src={Hamlet}/>
            </Col>
            <Col xsm={6} md={10}>
            <Card.Text>
            “Playbills, Props, and More: Stage Highlights from the Furness Shakespeare Library,” short term pop-up exhibit for the conference, “Digital and Archival Approaches to Theater History” (January, 2019)
            </Card.Text>
            </Col>
        </Row>
        <Row xsm={2} className="blend_card2">
            <Col xsm={6} md={2}>
            <Card.Img Variant="left" src={Stratford}/>
            </Col>
            <Col xsm={6} md={10}>
            <Card.Text>
            “The Stage and All the World: Shakespeare, Cervantes and Cartography”, Kislak Center for Special Collections, Rare Books and Manuscripts (April-May 2016)
            <a href="https://penntoday.upenn.edu/features/a-mid-spring-s-exhibit-featuring-two-gentlemen-at-van-pelt" class='btn btn-primary m-2'>Exhibit Announcement</a>
            </Card.Text>
            </Col>
        </Row>
        <Row xsm={2} className="blend_card2">
            <Col xsm={6} md={2}>
            <Card.Img Variant="left" src={Wolfreston}/>
            </Col>
            <Col xsm={6} md={10}>
            <Card.Text>“This Book Belongs to...Provenance Marks and Book Ownership Across the Centuries”, Kislak Center for Special Collections, Rare Books and Manuscripts (October-November 2015)</Card.Text>
            <a href="http://sceti.library.upenn.edu/POP_exhibit/" class='btn btn-primary m-2'>Digital Exhibit Selections</a>
            </Col>
        </Row>
        <Container className="blend_card2">
        <Card.Title>Conference and Event Planning</Card.Title>
        <ul>
            <li>As Interim Assistant Director for the Center for Renaissance Studies at the Newberry Library, I 
                organized and co-directed over 30 conferences, lectures, seminars, semester long courses,
                workshops, symposia, and institutes across the summer and academic year</li>
            <li>Conference Director, “Digital and Archival Approaches to Theater History” (Kislak Center, University of Pennsylvania January 17, 2019)</li>
            <li>Conference Director, “Newberry Library Center for Renaissance Studies Multidisciplinary Graduate Student Conference” (Newberry Library January 26-28 2012)</li>
            <li>Conference Director, “Intellectual Exchange and Networks in Europe: Approaches from the Humanities and Social Sciences” (The University of Chicago, May 7-8 2010)</li>
            </ul>
        </Container>
        <Container className="blend_card2">
            <Card.Title>Publications</Card.Title>
            <ul>
                <li>“Digitally Mapping Shakespeare's Women: Place Names and a Woman's Place in Othello and Midsummer” (Traveling/ Travailing Women: Early Modern England and the Wider World, University of Nebraska Press)</li>
                <li>“The Stage and All the World: Shakespeare, Cervantes and Cartography”, Kislak Center for Special Collections, Rare Books and Manuscripts (April-May 2016)</li>
                <li>“Martha Moulsworth,” “Richard Barnfield,” “Philemon Holland” The Encyclopedia of English Renaissance Literature. Chichester, UK: Wiley-Blackwell, 2012.</li>
            </ul>
        </Container>
        <Container className="blend_card2">
            <Card.Title>Blogs</Card.Title>
            <ul>
                <li><a href="https://provenanceonlineproject.wordpress.com/" class='btn btn-primary m-2'>Provenance Online Project Blog</a></li>
                <li><a href="https://philadelphiaplaybills.wordpress.com/" class='btn btn-primary m-2'>Philadelphia Playbills Blog</a></li>
            </ul>
        </Container>
    </Container>
        </>
    );
}

export default CuratorPortfolio
