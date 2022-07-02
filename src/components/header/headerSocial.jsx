/** @format */

import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const headerSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/prajjwal-singh-1752001"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/prajjwalkumar17" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCsh3MSY-FkqIACAVZAEWHBQ/featured"
        target="_blank"
      >
        <IoLogoYoutube />
      </a>
    </div>
  );
};

export default headerSocial;
