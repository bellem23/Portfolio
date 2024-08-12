import React from 'react'
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Projects() {
  return (
    <Container fluid>
      <h1>PROJECTS</h1>
      <Row>
      <Carousel style={{ justifyContent: 'center' }}>
        <Carousel.Item>
          <img className="about-image" src="/images/me.JPEG" alt="Isabelle Maddox"></img>
          <Carousel.Caption>
            <h3>Portfolio Website</h3>
            <p>idk if im gonna keep this text</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="about-image" src="/images/me.JPEG" alt="Isabelle Maddox"></img>
          <Carousel.Caption>
            <h3>Shrouded Moon</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Portfolio Website</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Shrouded Moon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Basic Particle System</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Projects;
