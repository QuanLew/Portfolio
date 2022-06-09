import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG5 from "../../assets/portfolio5.jpg";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Crypto Current Dashborad",
    github: "https://github.com",
    demo: "https://dribbble.com/tags/portfolio",
  },
  {
    id: 2,
    image: IMG5,
    title: "Crypto Current Dashborad",
    github: "https://github.com",
    demo: "https://dribbble.com/tags/portfolio",
  },
  {
    id: 3,
    image: IMG2,
    title: "Crypto Current Dashborad",
    github: "https://github.com",
    demo: "https://dribbble.com/tags/portfolio",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary btn-custom"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary btn-live"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        {/*
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/tags/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/tags/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/tags/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/tags/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/tags/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/tags/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        */}
      </div>
    </section>
  );
};

export default portfolio;
