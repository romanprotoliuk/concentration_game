import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import MenuButton from "./Buttons/MenuButton";

const MenuButtons = () => {
  const { handleMenuClick } = useContext(GameContext);

  return (
    <div className="easy-wrapper-button">
      {/* <Link href="#" className="easy-button">
        Play again
      </Link> */}
      <Link onClick={handleMenuClick} className="easy-gotomenu-button">
        Menu
      </Link>
    </div>
  );
};

export default MenuButtons;
