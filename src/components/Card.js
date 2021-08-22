import React from "react";

function Card({title, firstName, lastName, city, year}) {
  return (
    <li className="card">
      <div className="card__cover">
        <h2 className="card__title">{title}</h2>
      </div>
      <div className="card__description">
        <h3 className="card__subtitle">{lastName} {firstName}</h3>
        <p className="card__sub-description">{city} {year}</p>
      </div>
    </li>
  );
}

export default Card;
