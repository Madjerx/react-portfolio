import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__title">Jeremy</p>

        <ul className="footer__list">
          <li className="nav__item">
            <a href="#about" className="footer__link">
              <i className="uil uil-user nav__icon"></i> À propos
            </a>
          </li>
          <li className="nav__item">
            <a href="#home" className="footer__link">
              <i className="uil uil-file-alt nav__icon"></i> Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#home" className="footer__link">
              <i className="uil uil-briefcase-alt nav__icon"></i> Expériences
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="/" className="footer__social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="/" className="footer__social-link" target="_blank">
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
