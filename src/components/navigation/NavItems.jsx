import React from 'react';

const NavItems = ({ mouseEnter, item }) => {
	return (
		<div className={`nav-items-container ${mouseEnter ? 'show' : 'hide'}`}>
			{item}
		</div>
	);
};

export default NavItems;
