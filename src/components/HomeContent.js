import React from 'react'
import {Link} from 'react-router-dom'
import './HomeContent.css'



function HomeContent() {

  return (
    <div className="container-fluid">
      <section>
        <h1>
          Isabelle Maddox
        </h1>

        <p id="subtitle">
          Recent Computer Science graduate with a passion for problem solving and creating engaging experiences.
        </p>
      </section>
        
      <section>
        <h2>
          Get to Know Me...
        </h2>
        <div className="row w-auto" id="homeCardRow">
          <div className="col-md-6">
            <div className="card w-auto m-2">
                <div className="card-img-top">
                  <img src="assets/images/me_lights.jpg" className="d-block w-100" alt="Isabelle Maddox in front of a curtain of lights" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">About Me</h3>
                  <p className="card-text">
                  </p>
                </div>
                <a href='/Portfolio/about' className="stretched-link"></a>
              </div>
          </div>
            
          <div className="col-md-6">
            <div className="card w-auto m-2">
                <div className="card-img-top">
                  <img src="assets/gifs/milopuzzlescene.gif" className="d-block w-100" alt="GIF showing puzzle scene gameplay for The Brilliant Detective Milo" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">My Projects</h3>
                  <p className="card-text">
                  </p>
                </div>
                <a href='/Portfolio/projects' className="stretched-link"></a>
            </div>
          </div>
            
        </div>
      </section>
    </div>
  );
}

export default HomeContent;