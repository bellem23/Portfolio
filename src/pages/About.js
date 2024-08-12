import React from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ProfilePhoto from './components/ProfilePhoto'

function About() {
  const paragraph1Text = "Isabelle Maddox is a student at University of California, Irvine, who is currently studying Computer Science and set to graduate in 2024. Growing up playing video games, Isabelle's interest in video games pushed her to explore the field of Computer Science. Through her almost 4 years studying Computer Science, she has studied specialized topics related to computer graphics and introductory game design principles, as well as gained an interest in accessibility in software design.";
  
  const paragraph2Text = "In her free time, she enjoys reading fantasy novels, playing video games, singing and sewing.";
  
  return (
      <Container fluid>
        <Row>
            <h1>ABOUT</h1>
            <Col xs={12} sm={6}>
              <img className="about-image" src="/images/me.JPEG" alt="Isabelle Maddox"></img>
            </Col>
            <Col xs={12} sm={6}>
              <p className="about-paragraph-1">{paragraph1Text}</p>
              <p className="about-paragraph-2">{paragraph2Text}</p>
            </Col>
        </Row>
        <Row>
          <h2>TEMP</h2>
        </Row>
      </Container>
  );
}

export default About;
