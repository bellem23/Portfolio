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
    <div>
      <h1>Projects</h1>
      <p>
        Temp
      </p>

      <h2>Games</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card w-auto">
            <div class="card-img-top">
              <div id="carouselMilo" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselMilo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselMilo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <img src="gifs/milopuzzlescene.gif" class="d-block w-100" alt="GIF showing puzzle scene gameplay for The Brilliant Detective Milo" />
                  </div>
                  <div class="carousel-item">
                  <img src="gifs/milocomic.gif" class="d-block w-100" alt="GIF showing camera panning to different panels of a comic" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselMilo" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselMilo" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">The Brilliant Detective Milo</h3>
              <h4 class="card-subtitle">Lead Programmer | Unity</h4>
              <p class="card-text">
                A logic based puzzle game about a feline world-class investigator
                whom Mew York City’s police department contracts during the Halloween
                season to solve a string of copycat killings.
                <br />
                <br />
                Assisted in:

              </p>
              <a href="https://lukashauge.itch.io/detective-milo-prototype" target="_blank" class="btn btn-primary">Play a Demo</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card w-auto">
            <img src="gifs/shroudedmoon.gif" class="card-img-top" alt="GIF showing collectible collection in Shrouded Moon gameplay"/>
            <div class="card-body">
            <h3 class="card-title">Shrouded Moon</h3>
            <h4 class="card-subtitle">Programmer | Unity</h4>
            <p class="card-text">
              A 2D platformer about a traveler who must gain abilities
              from concentrations of wind energy to help a mysterious
              village that is trapped in a cycle due to the ‘Shrouded Moon’.
              <br />
              <br />
              Assisted in:

            </p>
            <a href="https://cairoschurz.itch.io/shrouded-moon" target="_blank" class="btn btn-primary">Play the Game</a>
            </div>
          </div>
        </div>
      </div>

      <h2>Other</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card w-auto">
            <div class="card-body">
            <h3 class="card-title">Portfolio Website</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="https://github.com/bellem23/maddox-website" class="btn btn-primary">View Source Code on GitHub</a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card w-auto">
            <img src="gifs/particlesystem.gif" class="card-img-top" alt="Particle System showcasing fire, rain, and fireworks" />
            <div class="card-body">
            <h3 class="card-title">Particle System</h3>
            <h4 class="card-subtitle">Unity</h4>
            <p class="card-text">
              A basic particle system built from scratch in Unity. 
              The particle system was used to create a campfire, a rain cloud, and (with modifications) a firework.
            </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
