import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="d-flex ps-3 header__socials ">
      <div className="ms-2">
        <a
          href="https://www.linkedin.com/in/web-developer-ravi-82419a272"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="ms-3">
        <a
          href="https://github.com/ravichandora0786"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="ms-3">
        <a
          href="https://www.instagram.com/_official.ravi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill
            style={{
              fontSize: "30px",
            }}
          />
        </a>
      </div>
      <div className="ms-3">
        <a
          href="https://t.me/ravi_chandora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTelegram
            style={{
              fontSize: "30px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
