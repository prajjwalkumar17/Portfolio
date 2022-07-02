/** @format */
import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";
const services = () => {
  return (
    <section id="services">
      <h5>What I delight & firms I worked</h5>
      <h2>Interests</h2>
      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>Programming</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Coding in Java for more than 5 years</p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                {" "}
                <a href="https://leetcode.com/hunger4codes/" target="_blank">
                  Leetcode
                </a>{" "}
                200+ problems solved.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Java servelets and rest apis with more concentration on android
                related stuffs.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <a href="https://www.youtube.com/channel/UCsh3MSY-FkqIACAVZAEWHBQ/featured">
                  Rejontech
                </a>{" "}
                Youtube channel : Posts tech related stuffs
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Oops Concepts, JDBC, Multithreading, Collection Framework, class
                management
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Adequate knowledge of most of the prominent Java libraries maps,
                Lists, Strings etc
              </p>
            </li>
          </ul>
        </article>
        {/*End of Programming*/}

        <article className="service">
          <div className="service__head">
            <h3>Native Android Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>1+ years of experience in Android tech</p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Worked on{" "}
                <a
                  href="https://github.com/prajjwalkumar17/VideoConfo"
                  target="_blank"
                >
                  WebRTC-videocall
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/prajjwalkumar17/gamethon"
                  target="_blank"
                >
                  Gamernation
                </a>{" "}
                in{" "}
                <a
                  href="https://drive.google.com/drive/folders/1Ax887k7AibKo3L1F05vG4F_9EJvPl68F?usp=sharing"
                  target="_blank"
                >
                  W3dev
                </a>
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Efficient codes remains the priority so that applications can
                really be scalable
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Firebase, Rest apis, Shared preferences and lots of production
                stuffs are already mastered
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Worked on{" "}
                <a
                  href="play.google.com/store/apps/details?id=com.StartupBBSR.competo"
                  target="_blank"
                >
                  Teamos
                </a>{" "}
                in{" "}
                <a
                  href="https://drive.google.com/file/d/15KfZA7knAtxdAk9E5csYTlq41n01Ijlh/view?usp=sharing"
                  target="_blank"
                >
                  Startup Grind BBSR
                </a>{" "}
                its a team finding application for hackathons
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Very good with Android backend very well suited for
                incorporating node with Native Android
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Worked on 10+ Productions projects & already handed too</p>
            </li>{" "}
          </ul>
        </article>
        {/*End of android*/}

        <article className="service">
          <div className="service__head">
            <h3>Backend Dev</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>MERN stack dev for more than a year and more upcoming!</p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Well versed with lifecycle and advanced concepts like
                Asynchronous code bases, Geolocations etc
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <a
                  href="https://documenter.getpostman.com/view/19037589/UzBqnjZ8"
                  target="_blank"
                >
                  Jobber
                </a>{" "}
                A platform similar to LinkedIn for searching jobs. Both backend
                and App is already completed
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <a href="https://cookbook-main.netlify.app/" target="_blank">
                  Cookbook
                </a>{" "}
                An application for searching of recepies using Rest-Apis
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <a
                  href="https://documenter.getpostman.com/view/19037589/UyxjHSS5"
                  target="_blank"
                >
                  Adventura-api
                </a>{" "}
                Platform to Search nearby tours and book them
              </p>
            </li>{" "}
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Fun fact 😜 This{" "}
                <a
                  href="https://github.com/prajjwalkumar17/Portfolio"
                  target="_blank"
                >
                  Portfolio
                </a>{" "}
                is also one of my projects made in React
              </p>
            </li>{" "}
          </ul>
        </article>
        {/*End of node*/}
      </div>
    </section>
  );
};

export default services;
