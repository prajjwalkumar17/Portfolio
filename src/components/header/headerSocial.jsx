/** @format */

import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";

const headerSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="blank">
        <FaBloggerB />
      </a>
    </div>
  );
};

export default headerSocial;
