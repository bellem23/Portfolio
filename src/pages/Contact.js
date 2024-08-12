import React from 'react'
import '../App.css';
import ContactForm from '../components/ContactForm'
import CFThankYouMessage from '../components/CFThankYouMessage';

/*
Contact Form uses this tutorial for backend set-up :
https://www.youtube.com/watch?app=desktop&v=Yg6POD0M30w
*/

var submitted = false;

function hideForm() {
    submitted = !submitted;
}

function Contact() {

  if (!submitted) {
    return (
      <ContactForm />
    );
  }

  else {
    return (
      <CFThankYouMessage />
    );
  }
}
      

export default Contact;
