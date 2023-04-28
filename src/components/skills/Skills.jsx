import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Mes technologies favorites</span>

      <div className="container skills__container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
