import React, { useState } from 'react';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import XIcon from '../../../../assets/icons/XIcon';

const EditGroups = ({ id, edit, close }) => {
	const [newGroupName, setNewGroupName] = useState('');

	const handleOnChange = (e) => {
		setNewGroupName(e.target.value);
	};

	const handleEdit = () => {
		edit(newGroupName, id);
      close();
	};

	return (
		<div
			className='edit-container'
			key={id}
			onChange={handleOnChange}
		>
			<input type='text'></input>
			<div>
				<div onClick={handleEdit}>
					<CheckIcon />
				</div>
				{/* <div>
					<XIcon />
				</div> */}
			</div>
		</div>
	);
};

export default EditGroups;
