import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">JS / TS</h4>
              <p className="skills__level">Intermédiaire</p>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">HTML / CSS</h4>
              <p className="skills__level">Intermédiaire</p>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">Angular</h4>
              <p className="skills__level">Intermédiaire</p>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h4 className="skills__name">React</h4>
              <p className="skills__level">Intermédiaire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
