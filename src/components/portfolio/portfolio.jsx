/** @format */

import React from "react";
import "./portfolio.css";
import IMG1 from "./../../assets/portfolio1.png";
import IMG2 from "./../../assets/portfolio2.png";
import IMG3 from "./../../assets/portfolio3.png";
import IMG4 from "./../../assets/portfolio4.png";
import IMG5 from "./../../assets/portfolio5.png";
import IMG6 from "./../../assets/portfolio6.png";
import IMG7 from "./../../assets/portfolio7.png";
import IMG8 from "./../../assets/portfolio8.png";
import IMG9 from "./../../assets/portfolio9.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "WebRTC-P2P-Calling",
    github: "https://github.com/prajjwalkumar17/VideoConfo",
    demo: "https://www.loom.com/share/a965ba54b5784695b4f20183fa82a086",
  },
  {
    id: 2,
    image: IMG2,
    title: "Plantifier",
    github: "https://github.com/prajjwalkumar17/PLANTIFIER",
    demo: "https://www.loom.com/share/efd92a37e61641848fd1c9a57518dad4",
  },
  {
    id: 3,
    image: IMG7,
    title: "WallZee",
    github: "https://github.com/prajjwalkumar17/WallZee",
    demo: "https://www.loom.com/share/f8a3518bfd714c82bf8776255c3cf9c4",
  },
  {
    id: 4,
    image: IMG9,
    title: "Log-Analyzer",
    github: "https://github.com/prajjwalkumar17/LogAnalyzer",
    demo: "https://www.loom.com/share/19c5dd868a584d5d8b9e1cb54d97b98d",
  },
  {
    id: 5,
    image: IMG4,
    title: "TEAMOS",
    github: "https://github.com/prajjwalkumar17/Competo",
    demo: "https://play.google.com/store/apps/details?id=com.StartupBBSR.competo",
  },
  {
    id: 6,
    image: IMG5,
    title: "Jobbers API and Android App",
    github: "https://github.com/prajjwalkumar17/Jobbers_Api",
    demo: "https://www.loom.com/share/64b611e565484b799379857570a37b98",
  },
  {
    id: 7,
    image: IMG6,
    title: "Gamethon",
    github: "https://github.com/prajjwalkumar17/gamethon",
    demo: "https://www.loom.com/share/424e3e71b9ae4982a4d0969ac8577715",
  },
  {
    id: 8,
    image: IMG3,
    title: "Cookbook",
    github: "https://github.com/prajjwalkumar17/CookBook",
    demo: "https://cookbook-main.netlify.app/",
  },
  {
    id: 9,
    image: IMG8,
    title: "React-Portfolio",
    github: "https://github.com/prajjwalkumar17/Portfolio",
    demo: "https://www.loom.com/share/5e458f6ffad04c17b830f0ba353dcb91",
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
