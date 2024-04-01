import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Ravi1.jpg'


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Ravi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            1 years experienced Full Stack Developer with hands-on experience in
            identifying web-based user interactions along with designing and
            implementing highly-responsive user interface components by
            deploying React concepts. I am an ambitious and dedicated individual with a passion for technology and a
            strong desire to excel in the corporate world. I strive to take on challenging positions where I can contribute my skills, diligence,
            and dedication to the success of the organization. With a Bachelor's degree in Computer Science and
            currently pursuing a Master's in Computer Application, I have a solid educational foundation and a thirst
            for knowledge.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <hr style={{height:"1px",backgroundColor:"lightskyblue",marginTop:"50px"}} />
    </section>

  );
};

export default Intro;
