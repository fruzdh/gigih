import "./style.css";
import { FaHouse, FaSistrix } from "react-icons/fa6";

const Menu = () => {
  return (
    <div className="menuWrapper">
      <div className="menuText icon">
        <FaHouse />
        <h2>Home</h2>
      </div>
      <div className="menuText icon">
        <FaSistrix />
        <h2>Search</h2>
      </div>
    </div>
  );
};

export default Menu;
