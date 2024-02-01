import React from "react";
import characterImages from "../helpers/characterImageMap";

const GameCard = ({
  id,
  content,
  character,
  handleCardClick,
  flipped,
  matched,
}) => (
  <div
    className={
      `card easy-click-card` +
      `${flipped ? " flipped" : ""}` +
      `${matched ? " matched" : ""}`
    }
    id={id}
    onClick={() => handleCardClick(id, character)}
  >
    <div className="front card-face" />
    <div
      className="back card-face"
      style={{
        backgroundImage: `url(${characterImages[character]})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
    />
  </div>
);

export default GameCard;
