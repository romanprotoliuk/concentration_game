import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const MenuButton = () => {
  const { stopTimer, resetTimer, setMenu, setUserClicks } =
    useContext(GameContext);

  const handleMenuClick = () => {
    resetTimer();
    setUserClicks(0);
    setMenu(true);
  };

  return (
    <button className="easy-gotomenu-button" onClick={handleMenuClick}>
      Menu
    </button>
  );
};

export default MenuButton;
