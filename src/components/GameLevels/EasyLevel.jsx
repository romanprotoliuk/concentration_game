import React from "react";

import Rules from "../Buttons/Rules";
import GameContainerButtons from "../GameContainerButtons";
import ScoreAndTime from "../ScoreAndTime";
import EndGamePrompt from "../EndGamePrompt";
import GameGrid from "../GameGrid";
import { CHARACTERS_LEVEL_EASY } from "../../helpers/characters";

const EasyLevel = ({ handleMenuClick }) => (
  <div className="easy-main-container">
    <Rules />
    <GameContainerButtons handleMenuClick={handleMenuClick} />
    <div className="easy-platform">
      <ScoreAndTime level={"easy"} />
      <EndGamePrompt />
      <GameGrid level={"easy"} characters={CHARACTERS_LEVEL_EASY} />
    </div>
  </div>
);

export default EasyLevel;
