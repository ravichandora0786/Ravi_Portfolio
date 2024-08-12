import "./contact.css";

import React, { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_7oetc98",
        "template_r2u8rn4",
        formRef.current,
        "a48sf5IvQnyKMY4iU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h5>
          I do receive your messages and will respond asap if the valid email is
          provided :)
        </h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>ravikumar62843@gmail.com</h5>
              <a href="mailto:ravikumar62843@gmail.com">Send a message</a>
            </article>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.3899467100148!2d74.20225963136197!3d30.12911120639409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917a79154f86721%3A0x4ce09ae52bb2fd93!2sAbohar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1691469433525!5m2!1sen!2sin"
                frameborder={0}
                style={{
                  border: "0",
                  width: "100%",
                  height: "320px",
                  borderRadius: "1.2rem",
                }}
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              rows="10"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </section>
      {/* <hr style={{height:"1px",backgroundColor:"lightskyblue"}} /> */}
    </>
  );
};

export default Contact;
