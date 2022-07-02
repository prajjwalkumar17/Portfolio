/** @format */

import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3k95t8q",
      "template_ld6otvi",
      form.current,
      "sMuRDyeq8HQ6eibuk"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>write2prajjwal@gmail.com</h5>
            <a href="mailto:write2prajjwal@gmail.com">Send a Message</a>
          </article>{" "}
          <article className="contact__option">
            <RiLinkedinBoxLine className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>write2prajjwal@gmail.com</h5>
            <a href="https://linkedin.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="http://api.whatsapp.com/send?phone=919031446811"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/*contact otpions end*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Contact Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
