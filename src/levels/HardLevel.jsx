import React from "react";
import { Link } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import ScoreAndTime from "../components/ScoreAndTime";
import EndGamePrompt from "../components/EndGamePrompt";

import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const HardLevel = () => {
  const { handleMenuClick } = useContext(GameContext);

  return (
    <div className="main-container">
      <div className="rules-hard">
        <a href="#" className="rules-for-game-hard">
          rules
        </a>
      </div>
      <div className="wrapper-button">
        <a href="#" className="button" id="btn-reset">
          Play Again
        </a>
        <Link onClick={handleMenuClick} className="hard-gotomenu-button">
          Menu
        </Link>
      </div>
      <div className="platform">
        <div className="wrapper-for-score-and-time">
          <div className="container-wrapper-score">
            <div className="wrapper-score">
              <h2 className="your-score-dummy-text">Your score:</h2>
              <h2 className="score">0</h2>
            </div>
          </div>
          <div className="container-wrapper-time">
            <div className="wrapper-time">
              <div className="wrapper-container-timer">
                <h3 className="heading-timer"></h3>
              </div>
            </div>
          </div>
          {/* <!-- change this to wrapper-final-prompt in CSS --> */}
          <div className="wrapper-final-prompt wrapper-final-prompt-hide">
            <div className="endgame-wrapper">
              <h1 className="heading">End Game</h1>
              <div className="wrapper-time-endgame">
                <h3 className="heading-2">Time:</h3>
                <h3 className="heading-3-time">02:30</h3>
              </div>
              <div className="wrapping-score-endgame">
                <h3 className="heading-2">Score:</h3>
                <h3 className="prompt-heading-score">18</h3>
              </div>
              <div className="wrapping-score-endgame">
                <h3 className="heading-2">Accuracy</h3>
                <h3 className="accuracy">100%</h3>
              </div>
            </div>
          </div>
        </div>
        <ScoreAndTime level={"hard"} />
        <EndGamePrompt />
        <GameGrid level={"hard"} />
      </div>
    </div>
  );
};

export default HardLevel;
