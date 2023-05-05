import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__title">Jeremy A.</p>

        <ul className="footer__list">
          <li className="nav__item">
            <a href="#about" className="footer__link">À propos
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="footer__link">Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#exp" className="footer__link">Expériences
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://github.com/Madjerx" className="footer__social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/jeremy-aguila-9b219b99/" className="footer__social-link" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Copyrights {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
