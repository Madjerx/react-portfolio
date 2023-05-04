import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">JAVA</h4>
              <p className="skills__level">Intermédiaire</p>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">Node.js</h4>
              <p className="skills__level">Débutant</p>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">Spring</h4>
              <p className="skills__level">Intermédiaire</p>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">SQL</h4>
              <p className="skills__level">Intermédiaire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
