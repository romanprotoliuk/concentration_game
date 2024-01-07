import { Link } from "react-router-dom";

const RulesLink = () => (
  <div className="rules">
    <Link onClick={() => console.log("rules")} className="rules-for-game">
      Rules
    </Link>
  </div>
);

export default RulesLink;
