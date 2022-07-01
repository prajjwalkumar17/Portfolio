/** @format */

import React from "react";
import "./portfolio.css";
import IMG1 from "./../../assets/portfolio1.jpg";
import IMG2 from "./../../assets/portfolio2.jpg";
import IMG3 from "./../../assets/portfolio3.jpg";
import IMG4 from "./../../assets/portfolio4.jpg";
import IMG5 from "./../../assets/portfolio5.png";
import IMG6 from "./../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Title of the production project 1",
    github: "https://github.com/",
    demo: "https://dibber.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Title of the production project 2",
    github: "https://github.com/",
    demo: "https://dibber.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Title of the production project 3",
    github: "https://github.com/",
    demo: "https://dibber.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Title of the production project 4",
    github: "https://github.com/",
    demo: "https://dibber.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Title of the production project 5",
    github: "https://github.com/",
    demo: "https://dibber.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Title of the production project 6",
    github: "https://github.com/",
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
