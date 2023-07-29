import React from 'react';
import XIcon from '../../assets/icons/XIcon';

const NavItems = ({ toggleItem, item, close }) => {
	return (
		<div className={`nav-items-container ${toggleItem ? 'show' : 'hide'}`}>
			<div onClick={close} className='close-item'>
				<XIcon width='30' height='30'/>
			</div>
			{item}
		</div>
	);
};

export default NavItems;
