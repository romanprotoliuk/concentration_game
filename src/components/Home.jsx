import React from "react";
import { useContext } from "react";
import Menu from "./Menu";

import { GameContext } from "../context/GameContext";

import EasyLevel from "../levels/EasyLevel";
import HardLevel from "../levels/HardLevel";

const Home = () => {
  const { menu, setMenu, level, setLevel } = useContext(GameContext);

  const handleClick = (e) => {
    setLevel(e.target.innerText.toLowerCase());
    setMenu(false);
  };

  const renderLevelComponent = () => {
    switch (level) {
      case "easy":
        return <EasyLevel />;
      case "hard":
        return <HardLevel />;
      default:
        return null;
    }
  };

  return (
    <>{menu ? <Menu handleClick={handleClick} /> : renderLevelComponent()}</>
  );
};

export default Home;
