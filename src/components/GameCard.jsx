import React from "react";

const GameCard = ({ id, content, onClick }) => (
  <div className={`card easy-click-card`} id={id} onClick={() => onClick(id)}>
    <div className="front card-face">{/* Front content can go here */}</div>
    <div className="back card-face">{content}</div>
  </div>
);

export default GameCard;
