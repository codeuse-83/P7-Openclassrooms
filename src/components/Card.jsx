import React from "react";

const Card = ({ logement }) => {
  return (
    <li className="card_block">
      <div className="card">
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.title}</p>
      </div>
    </li>
  );
};

export default Card;