import React from "react";
import "./about.css";
import ME from "../../assets/ME1.png";
import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>+3 Years Wording</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Project</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a link, use a
            button and change it with appropriate styles. Learn more:
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
