/** @format */

import React from "react";
import "./portfolio.css";
import IMG1 from "./../../assets/portfolio1.png";
import IMG2 from "./../../assets/portfolio2.png";
import IMG3 from "./../../assets/portfolio3.png";
import IMG4 from "./../../assets/portfolio4.png";
import IMG5 from "./../../assets/portfolio5.png";
import IMG6 from "./../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "WebRTC-P2P-Calling",
    github: "https://github.com/prajjwalkumar17/VideoConfo",
    demo: "https://dibber.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Plantifier",
    github: "https://github.com/prajjwalkumar17/PLANTIFIER",
    demo: "https://dibber.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cookbook",
    github: "https://github.com/prajjwalkumar17/CookBook",
    demo: "https://cookbook-main.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TEAMOS",
    github: "https://github.com/prajjwalkumar17/Competo",
    demo: "https://play.google.com/store/apps/details?id=com.StartupBBSR.competo",
  },
  {
    id: 5,
    image: IMG5,
    title: "Jobbers API and Android App",
    github: "https://github.com/prajjwalkumar17/Jobbers_Api",
    demo: "https://documenter.getpostman.com/view/19037589/UzBqnjZ8",
  },
  {
    id: 6,
    image: IMG6,
    title: "Gamethon",
    github: "https://github.com/prajjwalkumar17/gamethon",
    demo: "https://dibber.com/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        {data.map((i) => {
          return (
            <article key={i.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={i.image} alt={i.title} />
              </div>
              <h3>{i.title}</h3>
              <div className="portfolio__item-cta">
                <a href={i.github} className="btn" target="-blank">
                  Github
                </a>
                <a href={i.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
