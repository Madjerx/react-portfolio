import React from "react";
import ItemTag from "./ItemTag";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__tags">
        {item.tags.map((tag) => {
          return (
            <ItemTag tag={tag} key={`${item.id}-${item.tags.indexOf(tag)}`} />
          );
        })}
      </div>

      <div className="work__links">
        {item.githubUrl && (
          <a href={item.githubUrl} target="_blank" rel="noreferrer nofollow">
            <i className="uil uil-github"></i>
          </a>
        )}
        {/* {item.githubUrl && item.demo && <p className="work__button"> | </p>} */}
        {item.demo && (
          <a href={item.demo} className="work__button" target="_blank" rel="noreferrer nofollow">
            Aperçu <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorksItems;
