import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <footer>
      <a href="https://www.linkedin.com/in/isabelle-maddox-4a36271bb" target="_blank">
        <i className="fa-brands fa-linkedin fa-2xl" aria-hidden="true" aria-label="LinkedIn Icon"></i>
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="https://github.com/bellem23" target="_blank">
        <i className="fa-brands fa-github fa-2xl" aria-hidden="true" aria-label="GitHub Icon"></i>
        <span className="sr-only">GitHub</span>
      </a>
    </footer>
  );
}

export default Footer;