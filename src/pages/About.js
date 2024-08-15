import React from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <div class="container">
      <h1>About</h1>
      <div class="row" id="about">
        <div class="col-md-6 col-sm-12">
          <img src={process.env.PUBLIC_URL +"/images/me.jpg"} class="img w-100" alt="Isabelle Maddox" />
        </div>
        <div class="col-md-6 col-sm-12" id="about">
          <p id="Background">
            Isabelle Maddox is a recent graduate of University of California, Irvine. Growing up playing video games,
            Isabelle's interest in video games pushed her to explore the field of Computer Science.
            Graduating with a B.S. in Computer Science, she has studied specialized topics related to computer graphics
            and introductory game design principles.
            She aims to use the skills she has gained to create engaging experiences.
          </p>
          <p id="Experience">
            Isabelle truly began to explore her interest in video game creation with her involvement in UCI's Video Game Development Club.
            She has worked on two projects with members of the club and plans to continue working on learning the art of game creation
            beyond these projects with mini projects of her own.
          </p>
          <p id="Hobbies">
            Besides working with VGDC, Isabelle sang as a member of UCI Chamber Singers. In her free time, she enjoys reading fantasy novels, playing video games, singing and sewing.
          </p>
          <div class="row-md-6">
            <button href="/" target="_blank" class="btn btn-primary btn-dark m-2 d-inline">Software Engineer Resume</button>
            <button href="/" target="_blank" class="btn btn-primary btn-dark m-2 d-inline">Gameplay Programmer Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
