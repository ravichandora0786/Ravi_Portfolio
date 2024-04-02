import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";
import "./header.css";
import headerImage from "../../assets/headerImage.png";

const Header = () => {
  return (
    <>
      <header id="home">
        <div className="header__container">
          <div className="position-relative header__row1">
            <div className="header_col1">
              <h1>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <div>
                <h2>
                  I'M
                  <strong className="main-name"> Ravi</strong>
                </h2>
              </div>
              <div style={{ fontSize: "40px", color: "blue" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "Freelancer",
                      "MERN Stack Developer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
              <div className="mt-2">
                <HeaderSocials />
              </div>
            </div>
            <div className="position-absolute top-0 header_image ">
              <img src={headerImage} alt="header Image" />
            </div>
          </div>
          <div className="header__row2 ">
            <CTA />
          </div>
        </div>
      </header>
      <hr style={{ height: "1px", backgroundColor: "lightskyblue" }} />
    </>
  );
};

export default Header;
