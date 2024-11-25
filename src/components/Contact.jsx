import React from "react";
import "./Contact.css";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
