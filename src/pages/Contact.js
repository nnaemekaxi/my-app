import "./contact.css";
import React from "react";

export const Contact = () => {
return (
	<div className="contact">
      <main class="contact-main-section">
    <h1 class="contact-me-h1">Contact Me</h1>
    <p class="contact-message">Hi there, contact me to ask me about anything you have in mind.</p>
    <form action="/" class="contact-form">
        <section class="name-section">
        <p class="firstname">
            <label for="fname">First Name</label>
            <input type="text" name="fname" id="first_name" placeholder="Enter your first name" />  
        </p>
        <p class="lastname">
            <label for="lname">Last Name</label>
            <input type="text" name="lname" id="last_name" placeholder="Enter your last name" />
        </p>
        </section>
        <label for="email" class="email-label">Email</label>
        <input type="email" name="email" id="email" placeholder="yourname@email.com" />
        <label for="fname" id="message" class="message-label">Message</label>
        <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        <p class="agreement">
            <input type="checkbox" name="agreement" id="agreement" class="checkbox" />
            <span> You agree to providing your data to nnaemeka11 who may contact you.</span>
        </p>
        <button type="submit" id="btn__submit">Send Message</button>
    </form>
</main>
<hr></hr>
        <section class="footer-section">
            <img src="https://zuri.team/img/zuri-logo-full.svg" alt="zuri-img" class="zuri-img"></img>
            <p>HNG Internship 9 Frontend Task</p>
            <img clsss="I4G" src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1" alt="I4G-img"></img>
        </section>
    </div>
);
};

