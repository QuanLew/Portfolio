import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        QuanLe
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;QuanLe Tutorials. All rights reserved</small>
      </div>
      <Wave mask="url(#mask)" fill="#f9e4c8">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="5" width="5000" height="300" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </footer>
  );
};

export default Footer;
