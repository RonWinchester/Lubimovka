import React from "react";
import Card from "./Card";

function Elements({ cards }) {
  return (
    <div className="elements">
      <ul className="elements__list">
        {cards.map((card) => (
          <Card
            firstName={card.author_firstName}
            lastName = {card.author_lastName}
            title={card.title}
            city = {card.city}
            year = {card.year}
            key={card._id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Elements;
