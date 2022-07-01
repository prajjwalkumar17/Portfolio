/** @format */

import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Rejointech
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook">
          <FaFacebookF />
        </a>
        <a href="https://instagram">
          <BsInstagram />
        </a>
        <a href="https://twitter">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rejointech. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
