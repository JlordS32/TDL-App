import React from 'react';

const NavItems = ({ toggleItem, item }) => {
	return (
		<div className={`nav-items-container ${toggleItem ? 'show' : 'hide'}`}>
			{item}
		</div>
	);
};

export default NavItems;
