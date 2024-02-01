import React from "react";
import ChooseLevel from "./Buttons/ChooseLevel";

const Menu = ({ handleClick }) => {
  return (
    <div className="main-menu-wrapper">
      <div className="wrapper run-animation" id="animate">
        <div className="logo">
          <span className="marvel">Marvel Match</span>
          <span className="studios">Game</span>
          <div className="restart">Choose Your Difficulty Level</div>
          <div className="easy-level-btn">
            <ChooseLevel level="Easy" handleClick={handleClick} />
          </div>
          {/* <div className="hard-level-btn">
            <ChooseLevel level="Hard" handleClick={handleClick} />
          </div> */}
        </div>
      </div>
      <div className="images"></div>
    </div>
  );
};

export default Menu;
