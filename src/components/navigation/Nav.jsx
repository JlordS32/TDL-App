import '../../styles/nav.modules.css';
import LabelIcon from '../../assets/icons/LabelIcon';
import { useEffect, useState, createContext } from 'react';
import NavItemTitles from './NavItemTitles';
import NavItems from './NavItems';

export const NavContext = createContext();

const Nav = () => {
	const [toggleIconTitle, setToggleIconTitle] = useState(false);
	const [mouseEnter, setMouseEnter] = useState(false);
  const [item, setItem] = useState('No Item');

	const handleMouseLeave = () => {
		setMouseEnter(false);
	};

	const handleMouseEnter = () => {
		setMouseEnter(true);
	};

	return (
		<NavContext.Provider>
			<div
				className='nav-container'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='nav-icons-container'>
					<button
						onClick={() =>
							setToggleIconTitle(toggleIconTitle ? false : true)
						}
					>
					</button>
					<div className='nav-icons-wrapper'>
						<div className='nav-icons' onMouseEnter={() => setItem('Groups')}>
							<LabelIcon width='25' />
						</div>
						<div className='nav-icons' onMouseEnter={() => setItem('Test')}>
							<LabelIcon width='25' />
						</div>
						<div className='nav-icons' onMouseEnter={() => setItem('Test 2')}>
							<LabelIcon width='25' />
						</div>
					</div>
				</div>

				{toggleIconTitle && <NavItemTitles />}

				{mouseEnter && <NavItems mouseEnter={mouseEnter} item={item}/>}
			</div>
		</NavContext.Provider>
	);
};

export default Nav;
