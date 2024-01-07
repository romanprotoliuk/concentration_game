import React from "react";

const EndGamePrompt = ({ time, score, accuracy }) => {
  return (
    <div className="easy-wrapper-final-prompt easy-wrapper-final-prompt-hide">
      <div className="easy-endgame-wrapper">
        <h1 className="heading">End Game</h1>

        <div className="wrapper-time-endgame">
          <h3 className="heading-2">Time:</h3>
          <h3 className="easy-heading-3-time">{time}</h3>{" "}
          {/* Dynamic time data */}
        </div>

        <div className="wrapping-score-endgame">
          <h3 className="heading-2">Score:</h3>
          <h3 className="easy-prompt-heading-score">{score}</h3>{" "}
          {/* Dynamic score data */}
        </div>

        <div className="wrapping-score-endgame">
          <h3 className="heading-2">Accuracy:</h3>
          <h3 className="easy-accuracy">{accuracy}</h3>{" "}
          {/* Dynamic accuracy data */}
        </div>
      </div>
    </div>
  );
};

export default EndGamePrompt;
