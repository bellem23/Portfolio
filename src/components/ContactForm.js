import React from 'react'
import './ContactForm.css';

const submitted = false;

function hideForm() {
    submitted = !submitted;
}

function ContactForm() {
    return (
        <div class="container" className="ContactForm-container">
            <h1>Contact Me</h1>

            <form class="row g-3" action="https://formsubmit.co/7b4bb94bd130e85d3b8339d82d49c849" method="POST" id="contactForm">
            
                <input type="text" name="_honey" id="honeypot" />
                <label for="honeypot" class="sr-only">Honeypot</label>

                <input type="hidden" name="_captcha" value="false" />
        
                <div class="col-md-6">
                <label for="formName">Full Name</label>
                <input type="text" class="form-control" id="formName" placeholder="Enter full name" name="name" />
                </div>
                <div class="col-md-6">
                    <label for="formEmail">Email address</label>
                    <input type="email" class="form-control" id="formEmail" placeholder="Enter email" name="email" />
                </div>
                <div class="col-md-12">
                    <label for="formSubject">Subject</label>
                    <input type="text" class="form-control" id="formSubject" placeholder="Enter subject" name="subject" />
                </div>
                <div class="col-md-12">
                    <label for="formMessage">Message</label>
                    <textarea class="form-control" id="formMessage" rows="3" placeholder="Enter message" name="message"></textarea>
                </div>
                <div id="submitButton">
                    <button type="submit" class="btn btn-primary-2 btn-dark" id="submit" onClick={hideForm}>Submit</button>
                </div>
            </form>
        </div>
    );
  }
  
  export default ContactForm;