import { Link } from "react-router-dom";

const MenuButtons = ({ handleMenuClick }) => (
  <div className="easy-wrapper-button">
    <Link href="#" className="easy-button">
      Play again
    </Link>
    <Link onClick={handleMenuClick} className="easy-gotomenu-button">
      Menu
    </Link>
  </div>
);

export default MenuButtons;
