import '../../styles/nav.modules.css';
import { useContext } from 'react';
import { NavContext } from './Nav';

const NavItemTitles = () => {
	// const { handleToggleNavItems } = useContext(NavContext);

	const iconTitle = {
		group: 'Group',
		test: 'Test',
		test2: 'Test 2',
	};

	return (
		<div className='icon-title'>
			<div className='icon-title-wrapper'>
				<div className='nav-icon-title todo-group'>{iconTitle.group}</div>
				<div className='nav-icon-title todo-group'>{iconTitle.test}</div>
				<div className='nav-icon-title todo-group'>{iconTitle.test2}</div>
			</div>
		</div>
	);
};

export default NavItemTitles;
