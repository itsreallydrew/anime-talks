import React from 'react';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function SearchResults({ anime }) {
    return (
        <Container>
            {anime.map((items) => (     
<div>
    <Row>
        <Col><h3>{items.title}</h3></Col>
    </Row>
    <Row>
        <Col><img src={items.image_url} alt="" /></Col>
        <div>

        <Col>
            <h4>{items.score}</h4>
            <p>Episodes: {items.episodes}</p>
        </Col>
        </div>
    </Row>
    <Row>
        <Col>
            <p>{items.synopsis}</p>
            <a href={items.url}>More Details</a>
        </Col>
    </Row>
</div>
              ))

};                
    </Container>
)
}
export default SearchResults;