import React from 'react';
import emailjs from 'emailjs-com';
import "./form.css";

export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'portfolio_email_template', e.target, 'user_9nPtsTdb3HAOWUZJUb04Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input className="zoom_f input_i"type="hidden" name="contact_number" />
      <label>Name</label>
      <input className="zoom_f input_i"type="text" name="user_name" placeholder="Name"/>
      <label>Email</label>
      <input className="zoom_f input_i"type="email" name="user_email"placeholder="Email" />
      <label>Message</label>
      <textarea className="zoom_f input_i"name="message" placeholder="Enter Message Here"/>
      <input className="zoom_b"id="button"type="submit" value="Send" />
    </form>
  );
}