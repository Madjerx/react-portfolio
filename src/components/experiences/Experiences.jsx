import React, { useState } from "react";
import "./experiences.css";

const Experiences = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="exp section" id="exp">
      <h2 className="section__title">Expériences</h2>
      <span className="section__subtitle">Mon parcours</span>

      <div className="exp__container container">
        <div className="exp__tabs">
          <div
            className={
              toggleState === 1
                ? "exp__button exp__active button--flex"
                : "exp__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap exp__icon"></i> Formations
          </div>

          <div
            className={
              toggleState === 2
                ? "exp__button exp__active button--flex"
                : "exp__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt exp__icon"></i>
            Expériences
          </div>
        </div>

        <div className="exp__sections">
          <div
            className={
              toggleState === 1
                ? "exp__content exp__content-active"
                : "exp__content"
            }
          >
            <div className="exp__data">
              <div>
                <h3 className="exp__title">
                  Développement FullStack Java / Angular
                </h3>
                <span className="exp__subtitle">Aélion</span>
                <div className="exp__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="exp__rounder"></span>
                <span className="exp__line"></span>
              </div>
            </div>

            <div className="exp__data">
              <div></div>

              <div>
                <span className="exp__rounder"></span>
                <span className="exp__line"></span>
              </div>

              <div>
                <h3 className="exp__title">Développement Web / SEO</h3>
                <span className="exp__subtitle">Autodidacte</span>
                <div className="exp__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>

            <div className="exp__data">
              <div>
                <h3 className="exp__title">
                  Gestion des Risques et Stratégie d'Entreprise
                </h3>
                <span className="exp__subtitle">IAE Toulouse</span>
                <div className="exp__calender">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2015
                </div>
              </div>

              <div>
                <span className="exp__rounder"></span>
                <span className="exp__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "exp__content exp__content-active"
                : "exp__content"
            }
          >
            <div className="exp__data">
              <div>
                <h3 className="exp__title">
                  Développeur FullStack Java / Angular
                </h3>
                <span className="exp__subtitle">Inetum</span>
                <div className="exp__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Actuel
                </div>
              </div>

              <div>
                <span className="exp__rounder"></span>
                <span className="exp__line"></span>
              </div>
            </div>

            <div className="exp__data">
              <div></div>

              <div>
                <span className="exp__rounder"></span>
                <span className="exp__line"></span>
              </div>

              <div>
                <h3 className="exp__title">
                  Développeur Web et Consultant SEO
                </h3>
                <span className="exp__subtitle">Freelance</span>
                <div className="exp__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
