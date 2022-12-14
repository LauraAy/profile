import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
<>
<Container>
   
    <div className="fixed-bottom footer">
        <Card.Body>

            <h5>
            <a href="mailto:laurathecoder@gmail.com" class="link-custom">
            Contact Me: laurathecoder@gmail.com
            </a>
            </h5>
            <div class="right">
            <a href="https://www.flaticon.com/free-icons/developer" title="developer icons" class="link-custom">People icons created by Flat Icons - Flaticon</a>
            </div>
        </Card.Body>
    </div>
</Container>
</>
    )
}

export default Footer