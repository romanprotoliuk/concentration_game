import React from "react";

const ScoreAndTime = ({ level }) => {
  const isEasy = level === "easy";
  const gridClass = isEasy
    ? "easy-wrapper-for-score-and-time"
    : "wrapper-for-score-and-time";

  return (
    <div className={gridClass}>
      {/* Score Container */}
      <div className="easy-container-wrapper-score">
        <div className="wrapper-score">
          <h2 className="your-score-dummy-text">Your score:</h2>
          <h2 className="easy-score">0</h2> {/* Replace with dynamic score */}
        </div>
      </div>

      {/* Time Container */}
      <div className="easy-container-wrapper-time">
        <div className="wrapper-time">
          <div className="wrapper-container-timer">
            <h3 className="easy-heading-timer">
              Time Left: {/* Add dynamic timer here */}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreAndTime;
