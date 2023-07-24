import React, { useContext } from "react";
import "./Card.css";
import ThemeContext from "../Hooks/themeContext";

const Card = ({ title, image, content, revealContent }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} card z-depth-4`}>
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-content">
        <span className="card-title activator">{title}</span>

        <p>{content}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
};

export default Card;
