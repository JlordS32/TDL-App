import { useEffect, useState } from "react";
import "../../styles/nav.modules.css";

const NavItemTitles = ({ onMouseEnter, onMouseLeave }) => {
  const iconTitle = {
    group: "Group",
    test: "Test",
  };

  return (
    <div
      className='icon-title'>
      <div className='icon-title-wrapper'>
        <div
          className='nav-icon-title todo-group'>
          {iconTitle.group}
        </div>
        <div
          className='nav-icon-title'>
          {iconTitle.test}
        </div>
        <div
          className='nav-icon-title'>
          {iconTitle.test}
        </div>
      </div>
    </div>
  );
};

export default NavItemTitles;
