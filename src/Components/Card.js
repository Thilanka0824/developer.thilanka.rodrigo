import React from "react";
import "./Card.css";

const Card = ({ title, image, content, revealContent }) => {
  return (
    <div class="card">
      <div class="card-image">
        <img src={image} />
      </div>
      <div class="card-content">
        <span class="card-title activator">{title}</span>

        <p>{content}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
  );
};

export default Card;
