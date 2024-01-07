import React from "react";

const ChooseLevel = ({ level, handleClick }) => {
  return (
    <button className="level-button" onClick={handleClick}>
      {level}
    </button>
  );
};

export default ChooseLevel;
