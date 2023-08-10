import React, { useEffect, useState } from 'react';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import XIcon from '../../../../assets/icons/XIcon';
import '../../../../styles/groups.modules.css';

const EditGroups = ({ id, edit, close }) => {
	const [newGroupName, setNewGroupName] = useState('');

	const handleOnChange = (e) => {
		setNewGroupName(e.target.value);
	};

	const handleEdit = () => {
		edit('123');
		close();
	};

	return (
		<div
			className='edit-container'
			key={id}
		>
			<input
				type='text'
				onChange={handleOnChange}
				value={newGroupName}
			/>
			<div className='icons'>
				<div onClick={handleEdit}>
					<CheckIcon />
				</div>
				<div>
					<XIcon />
				</div>
			</div>
		</div>
	);
};

export default EditGroups;
