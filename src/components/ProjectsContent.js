import React from 'react'
import './ProjectsContent.css'



function ProjectsContent() {

  return (
    <div className="container w-auto">
      <h1>Projects</h1>

      <h2>Solo Projects</h2>
      <div className="row">
        <div className="col-md-6">
            <div className="card w-auto h-100">
              <img src="assets/images/barcode_scanner.jpg" className="card-img-top" alt="Barcode Scanner In Front of Laptop Screen" />
              <div className="card-body">
              <h3 className="card-title">Book Cataloging Web Application</h3>
              <h4 className="card-subtitle">Flask</h4>
              <p className="card-text">
                A Flask app that allows users to scan books using a barcode scanner and generate an entry into a Notion database. The app utilizes
                the Google Books API to collect information using a given ISBN and the Notion API to add an entry into a Notion database.
              </p>
              <a href="https://github.com/bellem23/Book-Cataloging-Web-App" className="btn btn-primary btn-dark">View Source Code on GitHub</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card w-auto h-100">
              <img src="assets/images/website.jpg" className="card-img-top" alt="Screenshot of Website Homepage" />
              <div className="card-body">
              <h3 className="card-title">Portfolio Website</h3>
              <h4 className="card-subtitle">React.js</h4>
              <p className="card-text">
                  A portfolio website built using React.js and Bootstrap that houses information about myself.
              </p>
              <a href="https://github.com/bellem23/Portfolio" className="btn btn-primary btn-dark">View Source Code on GitHub</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card w-auto h-100">
              <img src="assets/gifs/particlesystem.gif" className="card-img-top" alt="Particle System showcasing fire, rain, and fireworks" />
              <div className="card-body">
              <h3 className="card-title">Particle System</h3>
              <h4 className="card-subtitle">Unity</h4>
              <p className="card-text">
                A basic particle system built from scratch in Unity. 
                The particle system was used to create a campfire, a rain cloud, and (with modifications) a firework.
                <br />
                <br />
                <br />
              </p>
              </div>
            </div>
          </div>
        </div>
      
      <h2>Games</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card w-auto h-100">
            <div className="card-img-top">
              <div id="carouselMilo" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselMilo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselMilo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <img src="assets/gifs/milopuzzlescene.gif" className="d-block w-100" alt="GIF showing puzzle scene gameplay for The Brilliant Detective Milo" />
                  </div>
                  <div className="carousel-item">
                  <img src="assets/gifs/milocomic.gif" className="d-block w-100" alt="GIF showing camera panning to different panels of a comic" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselMilo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselMilo" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">The Brilliant Detective Milo</h3>
              <h4 className="card-subtitle">Lead Programmer | Unity</h4>
              <p className="card-text">
                A logic based puzzle game about a feline world-class investigator
                whom Mew York City’s police department contracts during the Halloween
                season to solve a string of copycat killings.
                <br />
                <br />
                Assisted in: <br />
                Dragging and Opening Mechanics for folders, Camera Panning mechanics in puzzle and comic scenes, 
                Pop-up Menus for suspect selection, Freeplay Modeday selection and implementing preliminary mechanics for saving and loading.
                <br />
              </p>
              <a href="https://lukashauge.itch.io/detective-milo-prototype" target="_blank" className="btn btn-primary btn-dark">Play a Demo</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card w-auto h-100">
            <img src="assets/gifs/shroudedmoon.gif" className="card-img-top" alt="GIF showing collectible collection in Shrouded Moon gameplay"/>
            <div className="card-body">
            <h3 className="card-title">Shrouded Moon</h3>
            <h4 className="card-subtitle">Programmer | Unity</h4>
            <p className="card-text">
              A 2D platformer about a traveler who must gain abilities
              from concentrations of wind energy to help a mysterious
              village that is trapped in a cycle due to the ‘Shrouded Moon’.
              <br />
              <br />
              Assisted in: <br />
              Mechanics for collectable items for the player to gather throughout the game (Coins, Power-ups, Healing items, etc).
              <br />
              <br />
            </p>
            <a href="https://cairoschurz.itch.io/shrouded-moon" target="_blank" className="btn btn-primary btn-dark">Play the Game</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProjectsContent;