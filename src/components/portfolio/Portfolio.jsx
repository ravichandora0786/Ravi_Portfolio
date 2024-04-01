import React, { useState } from "react";
import "./portfolio.css";

import IMG1 from "../../assets/commercial_Buzz.png";
import IMG2 from "../../assets/calculator.png";
import IMG3 from "../../assets/computer_web.png";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Bussiness Website",
      img: IMG1,
      description: "An bussiness website is base on Shark Tank episode.",
      technologies:
        "Html | CSS | Javascript |JQuery | Ajex | AngularJS | NodeJS | MySQL",
      link: "https://commercial-buzz.netlify.app/",
      // github: "",
    },
    {
      id: 2,
      title: "Calculator",
      img: IMG2,
      description: "calculator",
      technologies: "HTML | CSS | JavaScript",
      link: "https://calculator-ravi.netlify.app/",
      // github: "",
    },
    {
      id: 3,
      title: "Computer Site",
      img: IMG3,
      description: "web site for Computer Institute",
      technologies: "NextJs | Tailwind | NodeJs | ExpressJs | Mongoose",
      link: "/",
      // github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <div className="portfolio__item">
            <article key={pro.id}>
              <div className="paragraph">
                <div className="portfolio__item-image">
                  <a href={pro.img} target="_blank" rel="noreferrer">
                    <img src={pro.img} alt={pro.title} />
                  </a>
                </div>
                <div className="portfolio__item-content">
                  <h3>{pro.title}</h3>
                  <p>{pro.description}</p>
                  <p>{pro.technologies}</p>
                </div>
              </div>
              <div className="portfolio__item-cta">
                {/* <div className="buttonlink">
                  <a
                    href={pro.github}
                    target="_blank"
                    // className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div> */}
                <div className="buttonlink">
                  <a
                    href={pro.link}
                    target="_blank"
                    // className="btn"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <hr
        style={{
          height: "1px",
          backgroundColor: "lightskyblue",
          marginTop: "50px",
        }}
      />
    </section>
  );
};

export default Portfolio;
