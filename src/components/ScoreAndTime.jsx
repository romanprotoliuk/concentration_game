import React from "react";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const ScoreAndTime = ({ level }) => {
  const isEasy = level === "easy";
  const gridClass = isEasy
    ? "easy-wrapper-for-score-and-time"
    : "wrapper-for-score-and-time";
  const { score, timer } = useContext(GameContext);

  const formatTime = (num) => {
    return num <= 9 ? `0${num}` : num;
  };

  return (
    <div className={gridClass}>
      {/* Score Container */}
      <div className="easy-container-wrapper-score">
        <div className="wrapper-score">
          <h2 className="easy-score">{score}</h2>
        </div>
      </div>

      {/* Time Container */}
      {/* <div className="easy-container-wrapper-time">
        <div className="wrapper-time">
          <div className="wrapper-container-timer">
            <h3 className="easy-heading-timer">
              {formatTime(timer.minutes)}:{formatTime(timer.seconds)}
            </h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ScoreAndTime;
