import React from "react";
import "./card-list.styles.css";
import { Card } from "../Card/card.compnent";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.pirates.map((piratevar) => (
        <Card key={piratevar.id} pirate={piratevar} />
      ))}
    </div>
  );
};
