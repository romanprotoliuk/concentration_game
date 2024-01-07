import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import EasyLevel from "./GameLevels/EasyLevel";
import HardLevel from "./GameLevels/HardLevel";

const Home = () => {
  const [menu, setMenu] = useState(true);
  const [level, setLevel] = useState("");

  const handleClick = (e) => {
    setLevel(e.target.innerText.toLowerCase());
    setMenu(false);
  };

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  console.log(level);

  const renderLevelComponent = () => {
    switch (level) {
      case "easy":
        return <EasyLevel handleMenuClick={handleMenuClick} />;
      case "hard":
        return <HardLevel handleMenuClick={handleMenuClick} />;
      default:
        return null;
    }
  };

  return (
    <>{menu ? <Menu handleClick={handleClick} /> : renderLevelComponent()}</>
  );
};

export default Home;
