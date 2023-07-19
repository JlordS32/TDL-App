import { useEffect, useState } from "react";
import "../../styles/nav.modules.css";

const NavItemTitles = ({ onMouseEnter, onMouseLeave }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  const iconTitle = {
    group: "Group",
    test: "Test",
  };

  return (
    <div
      className='icon-title'
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}>
      <div className='icon-title-wrapper'>
        <div
          className='nav-icon-title todo-group'
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
          {iconTitle.group}
        </div>
        <div
          className='nav-icon-title'
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
          {iconTitle.test}
        </div>
        <div
          className='nav-icon-title'
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
          {iconTitle.test}
        </div>
      </div>
    </div>
  );
};

export default NavItemTitles;
