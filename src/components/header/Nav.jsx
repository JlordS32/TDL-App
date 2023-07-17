import "../../styles/nav.modules.css";
import LabelIcon from "../../assets/icons/LabelIcon";
import { useEffect, useState } from "react";
import NavItemTitles from "./NavItemTitles";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Nav = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(true);
  };

  return (
    <div className="nav-container">
      <div
        className="nav-icons-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="">
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

      {mouseEnter && (
         <NavItemTitles 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         />
      )} 
    </div>
  );
};

export default Nav;
