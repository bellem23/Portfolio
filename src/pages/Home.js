import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

function Home() {
  return (
    <div class="container-fluid">
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
        <div class="text-column">
          <Link to='/React-Website/about'>
            <div class="card w-auto m-2">
              <div class="card-img-top">
                <img src="images/me_lights.jpg" class="d-block w-100" alt="Isabelle Maddox in front of a curtain of lights" />
              </div>
              <div class="card-body">
                <h3 class="card-title">About Me</h3>
                <p class="card-text">
                </p>
              </div>
            </div>
          </Link>
          <Link to="/React-Website/projects">
            <div class="card w-auto m-2">
              <div class="card-img-top">
                <img src="images/gifs/milopuzzlescene.gif" class="d-block w-100" alt="GIF showing puzzle scene gameplay for The Brilliant Detective Milo" />
              </div>
              <div class="card-body">
                <h3 class="card-title">My Projects</h3>
                <p class="card-text">
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
