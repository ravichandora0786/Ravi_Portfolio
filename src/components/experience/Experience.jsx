import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/icons8-css.svg";
import JavaScript from "../../assets/icons/javascript.svg";
import mongodb from "../../assets/icons/mongodb.png";
import nodejs from "../../assets/icons/nodejs (1).svg";
import expressjs from "../../assets/icons/express-js.svg";
import nestjs from "../../assets/icons/nestjs.svg";
import bootStrap from "../../assets/icons/bootstrap-icon.svg";
import sql from "../../assets/icons/sql.svg";
import "./experience.css";
import Progressbar from "./progress_bar";

const Experience = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", icon: html, exp_level: "junior", progress: "95" },
    { id: 2, name: "React", icon: react, exp_level: "junior", progress: "74" },
    { id: 3, name: "CSS", icon: css, exp_level: "junior", progress: "80" },
    {
      id: 4,
      name: "JavaScript",
      icon: JavaScript,
      exp_level: "junior",
      progress: "81",
    },
    {
      id: 5,
      name: "Mongodb",
      icon: mongodb,
      exp_level: "junior",
      progress: "82",
    },
    {
      id: 6,
      name: "NodeJS",
      icon: nodejs,
      exp_level: "junior",
      progress: "83",
    },
    {
      id: 7,
      name: "ExpressJS",
      icon: expressjs,
      exp_level: "junior",
      progress: "88",
    },
    {
      id: 8,
      name: "NestJS",
      icon: nestjs,
      exp_level: "junior",
      progress: "66",
    },
    { id: 9, name: "My SQL", icon: sql, exp_level: "junior", progress: "70" },
    {
      id: 10,
      name: "Bootstrap",
      icon: bootStrap,
      exp_level: "junior",
      progress: "74",
    },
  ]);

  useEffect(() => {}, []);

  const responsive = {
    0: { items: 1 },
    512: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 5 },
  };

  const items = skills?.map((item) => {
    return (
      <div className="mylang" title={item.name} key={item.id}>
        <div className="lang-info">
          <div style={{ height: "80%", textAlign: "center" }}>
            <div className="lang-img">
              <img src={item.icon} alt="" />
            </div>
            <h3>{item.name}</h3>
            <p className="exp_level">{item.exp_level}</p>
          </div>

          <div style={{ height: "20%", width: "120px" }}>
            <Progressbar
              key={item.id}
              height={20}
              bgcolor={"var(--color-primary)"}
              progress={item.progress}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="experience">
        <div className="progress-container">
          <div className="progress-title">
            <h2>My Skills Progress so far</h2>

            <h3>My Skills</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={items}
                responsive={responsive}
              />
            </div>
          </div>
        </div>
      </section>
      <hr style={{ height: "1px", backgroundColor: "lightskyblue" }} />
    </>
  );
};

export default Experience;
