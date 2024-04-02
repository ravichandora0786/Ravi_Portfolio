import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Ravi
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/web-developer-ravi-82419a272"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ravichandora0786"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_official.ravi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill />
        </a>
        <a
          href="https://t.me/ravi_chandora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTelegram
           
          />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
