/** @format */

import React from "react";
import "./about.css";
import ME from "./../../assets/miscdp.jpg";
import { RiAwardLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { RiFolderChartFill } from "react-icons/ri";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardLine className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Clients worldwide</small>
            </article>

            <article className="about__card">
              <RiFolderChartFill className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            rem incidunt modi magnam, enim quod animi qui ratione omnis quis ab
            odit nostrum asperiores. Dolore dicta nesciunt quis nemo deserunt.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
