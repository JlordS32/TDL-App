import '../../styles/nav.modules.css';
import LabelIcon from '../../assets/icons/LabelIcon';
import { useEffect, useState, createContext } from 'react';
import NavItems from './NavItems';

export const NavContext = createContext();

const Nav = () => {
	const [toggleItem, setToggleItem] = useState(false);
	const [item, setItem] = useState('No Item');

	const handleToggleItem = (item) => {
		setToggleItem(true);
		setItem(item);
	};

	return (
		<div className='nav-container'>
			<div className='nav-icons-container'>
				<div
					className='nav-icons'
					onClick={() => handleToggleItem('Groups')}
				>
					<LabelIcon width='25' />
				</div>
				<div
					className='nav-icons'
					onClick={() => handleToggleItem('Test')}
				>
					<LabelIcon width='25' />
					<p>Hello world</p>
				</div>
				<div
					className='nav-icons'
					onClick={() => handleToggleItem('Test 2')}
				>
					<LabelIcon width='25' />
				</div>
			</div>

			{toggleItem && (
				<NavItems
					toggleItem={toggleItem}
					item={item}
				/>
			)}
		</div>
	);
};

export default Nav;
