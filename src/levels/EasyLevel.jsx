import React from "react";

import Rules from "../components/Buttons/Rules";
import GameContainerButtons from "../components/GameContainerButtons";
import ScoreAndTime from "../components/ScoreAndTime";
import EndGamePrompt from "../components/EndGamePrompt";
import GameGrid from "../components/GameGrid";
import { CHARACTERS_LEVEL_EASY } from "../helpers/characters";

const EasyLevel = () => (
  <div className="easy-main-container">
    {/* <Rules /> */}
    <GameContainerButtons />
    <div className="easy-platform">
      <ScoreAndTime level={"easy"} />
      <EndGamePrompt />
      <GameGrid level={"easy"} characters={CHARACTERS_LEVEL_EASY} />
    </div>
  </div>
);

export default EasyLevel;
