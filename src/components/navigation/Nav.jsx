import '../../styles/nav.modules.css';
import LabelIcon from '../../assets/icons/LabelIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import { useEffect, useState, createContext } from 'react';
import NavItems from './NavItems';

export const NavContext = createContext();

const Nav = ({ dialogRef }) => {
	const [toggleItem, setToggleItem] = useState(false);
	const [item, setItem] = useState('No Item');

	const handleToggleItem = (item) => {
		setToggleItem(true);
		setItem(item);
	};

	const handleCloseItem = () => {
		setToggleItem(false);
	};

	return (
		<div className='nav-container'>
			<div className='nav-icons-container'>
				<div
					className='nav-icons'
					onClick={() => handleToggleItem('groups')}
				>
					<div>
						<LabelIcon width='25' />
					</div>
					<span className='nav-icons-text'>Groups</span>
				</div>
				<div
					className='nav-icons'
					onClick={() => handleToggleItem('test')}
				>
					<div>
						<LabelIcon width='25' />
					</div>
					<div className='nav-icons-text'>Hello</div>
				</div>
				<div
					className='nav-icons'
					onClick={() => handleToggleItem('test 2')}
				>
					<div>
						<LabelIcon width='25' />
					</div>
					<div className='nav-icons-text'>Hello</div>
				</div>
				<div
					className='nav-icons'
					onClick={() => handleToggleItem('test 2')}
				>
					<div>
						<SettingsIcon />
					</div>
					<div className='nav-icons-text'>Settings</div>
				</div>
			</div>

			{toggleItem && (
				<NavItems
					toggleItem={toggleItem}
					item={item}
					close={handleCloseItem}
					dialogRef={dialogRef}
				/>
			)}
		</div>
	);
};

export default Nav;
