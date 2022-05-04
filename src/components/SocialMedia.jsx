import React from "react";
import "./sm.scss";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/margani-rohith/" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/Rohith1221" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://twitter.com/__rohith___" target="_blank">
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
