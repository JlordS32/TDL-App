import '../../styles/nav.modules.css';
import LabelIcon from '../../assets/icons/LabelIcon';
import { useEffect, useState, createContext } from 'react';
import NavItemTitles from './NavItemTitles';
import NavItems from './NavItems';

export const NavContext = createContext();

const Nav = () => {
	const [toggleIconTitle, setToggleIconTitle] = useState(false);
	const [mouseEnter, setMouseEnter] = useState(false);

	const handleMouseLeave = () => {
		setMouseEnter(false);
	};

	const handleMouseEnter = () => {
		setMouseEnter(true);
	};

	return (
		<NavContext.Provider>
			<div className='nav-container'>
				<div
					className='nav-icons-container'
					onMouseEnter={handleMouseEnter}
				>
					<button
						onClick={() =>
							setToggleIconTitle(toggleIconTitle ? false : true)
						}
					>
						X
					</button>
					<div className='nav-icons-wrapper'>
						<div className='nav-icons'>
							<LabelIcon width='25' />
						</div>
						<div className='nav-icons'>
							<LabelIcon width='25' />
						</div>
						<div className='nav-icons'>
							<LabelIcon width='25' />
						</div>
					</div>
				</div>

				{toggleIconTitle && <NavItemTitles />}

				{mouseEnter && (
					<NavItems
						mouseEnter={mouseEnter}
						handleMouseLeave={handleMouseLeave}
            handleMouseEnter={handleMouseEnter}
					/>
				)}
			</div>
		</NavContext.Provider>
	);
};

export default Nav;
