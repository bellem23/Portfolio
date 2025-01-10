import React from 'react'
import './ContactForm.css';

const handleSubmit = (event) => {

    event.preventDefault();

    const form = document.getElementById("contactForm")
    const formData = new FormData(form)
    const url = "https://formsubmit.co/7b4bb94bd130e85d3b8339d82d49c849"
    fetch(
      url,
      {
        method: 'POST',
        body: formData
      }
    )

    console.log("Form submitted")

    form.style.display = 'none';
    document.getElementById("thankYouMessage").style.display = 'flex';
}

function ContactForm() {
    return (
        <div className="ContactForm-container">
            <h1>Contact Me</h1>

            <form class="row g-3" onSubmit={handleSubmit} method="POST" id="contactForm">
                <input type="text" name="_honey" id="honeypot" />
                <label for="honeypot" class="sr-only">Honeypot</label>

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_next" value="https://bellem23.github.io/Portfolio/contact" />
        
                <div class="col-md-6 pb-0">
                <label for="formName">Full Name</label>
                <input type="text" class="form-control" id="formName" placeholder="Enter full name" name="name" />
                </div>
                <div class="col-md-6 pb-0">
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
                    <button type="submit" class="btn btn-primary-2 btn-dark" id="submit">Submit</button>
                </div>
            </form>

            <div class="text-column" id="thankYouMessage"> 
                <h2>
                    Message Sent!
                </h2>
                <p>
                    I will get back to you as soon as I can.
                </p>
            </div>
        </div>
    );
  }
  
  export default ContactForm;