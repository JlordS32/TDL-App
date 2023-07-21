import '../../styles/nav.modules.css';
import LabelIcon from '../../assets/icons/LabelIcon';
import { useEffect, useState, createContext } from 'react';
import NavItemTitles from './NavItemTitles';
import NavItems from './NavItems';

export const NavContext = createContext();

const Nav = () => {
  const [click, setClick] = useState(false);
  const [toggleNavItems, setToggleNavItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleToggleNavItems = (item) => {
    setToggleNavItems(toggleNavItems ? false : true);
  };

  return (
    <NavContext.Provider value={{handleToggleNavItems}}>
      <div className='nav-container'>
        <div className='nav-icons-container'>
          <button onClick={() => setClick(click ? false : true)}>X</button>
          <div className='nav-icons-wrapper'>
            <div className='nav-icons' onClick={() => handleToggleNavItems('Groups')}>
              <LabelIcon width='25' />
            </div>
            <div className='nav-icons' onClick={handleToggleNavItems}>
              <LabelIcon width='25' />
            </div>
            <div className='nav-icons' onClick={handleToggleNavItems}>
              <LabelIcon width='25' />
            </div>
          </div>
        </div>

        {click && <NavItemTitles />}

        {toggleNavItems && <NavItems />}
      </div>
    </NavContext.Provider>
  );
};

export default Nav;
