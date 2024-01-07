import React from "react";

import Rules from "../Buttons/Rules";
import GameContainerButtons from "../GameContainerButtons";
import ScoreAndTime from "../ScoreAndTime";
import EndGamePrompt from "../EndGamePrompt";
import GameGrid from "../GameGrid";

const EasyLevel = ({ handleMenuClick }) => (
  <div className="easy-main-container">
    <Rules />
    <GameContainerButtons handleMenuClick={handleMenuClick} />
    <div className="easy-platform">
      <ScoreAndTime />
      <EndGamePrompt />
      <GameGrid level="easy" />
    </div>
  </div>
);

export default EasyLevel;
