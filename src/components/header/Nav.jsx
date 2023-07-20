import "../../styles/nav.modules.css";
import LabelIcon from "../../assets/icons/LabelIcon";
import { useEffect, useState } from "react";
import NavItemTitles from "./NavItemTitles";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(click ? false : true);
  }

  return (
    <div className="nav-container">
      <div className="nav-icons-container">
        <button onClick={handleClick}>X</button>
        <div className="nav-icons-wrapper">
          <div className="nav-icons">
            <LabelIcon width="25" />
          </div>
          <div className="nav-icons">
            <LabelIcon width="25" />
          </div>
          <div className="nav-icons">
            <LabelIcon width="25" />
          </div>
        </div>
      </div>

      {click && (
         <NavItemTitles />
      )} 
    </div>
  );
};

export default Nav;
