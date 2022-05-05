import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// 11-24 - KP need to add links to "Learn More" section of footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerAddress">
        <h1 className="footerLogo">
          {" "}
          <img src="./images/farmer.png" height={25} />
        </h1>

        <h2>
          Digital Dream <br /> Alex, Ryan, Jeremias and Neetha
        </h2>
      </div>
      <ul className="footerNav">
        <li className="navItem"></li>
        Support Local Farmer's <span className="heart">♥</span>
        <li className="navItem"></li>
        <div>
          <li className="navItem">
            <h2 className="navTitle">Connect With Us</h2>
            <a
              className="footerButton"
              href="https://www.linkedin.com/in/alexander-jessop-9326a2236/"
            >
              Alex-LinkedIn
            </a>
            <a
              className="footerButton"
              href="https://www.linkedin.com/in/ryancaruthcalgary/"
            >
              Ryan-LinkedIn
            </a>
            <a
              className="footerButton"
              href="https://www.linkedin.com/in/jeremias-pereira-silva-b29aba213/"
            >
              Jeremias-LinkedIn
            </a>
            <a
              className="footerButton"
              href="https://www.linkedin.com/in/neetha-pappala/"
            >
              Neetha-LinkedIn
            </a>
            <ul className="navList"></ul>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
