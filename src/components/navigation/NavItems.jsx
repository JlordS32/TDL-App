import React from 'react';
import XIcon from '../../assets/icons/XIcon';
import Groups from './navItems/Groups';
import Test from './navItems/Test';
import '../../styles/nav.modules.css';

const NavItems = ({ toggleItem, item, close }) => {
	const componentMap = {
		groups: <Groups />,
		test: <Test />,
	};

	const content = componentMap[item.toLowerCase()] || (
		<div>Page Not Found!</div>
	);

	return (
		<div
			className={`
			nav-items-container 
			${toggleItem ? 'show' : 'hide'}`}
		>
			<div
				onClick={close}
				className='close-item'
			>
				<XIcon
					width='30'
					height='30'
				/>
			</div>
			<div className={`${item.toLowerCase()}-container`}>
				{content}
			</div>
		</div>
	);
};

export default NavItems;
