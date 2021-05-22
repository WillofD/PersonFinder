import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="pirate"
      src={`https://robohash.org/${props.pirate.id}?set=set2&size=180x180`}
    />
    <h2>{props.pirate.name}</h2>
    <p>{props.pirate.email}</p>
  </div>
);
