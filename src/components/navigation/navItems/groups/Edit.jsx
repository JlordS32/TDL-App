import React from 'react';
import XIcon from '../../../../assets/icons/XIcon';
import CheckIcon from '../../../../assets/icons/CheckIcon';

export function EditGroup({
	handleOnChange,
	handleEdit,
	close,
   id,
   defaultName
}) {
	return (
		<div
			className='edit-container'
		>
			{/* Input field for editing group name */}
			<input
				type='text'
				onChange={handleOnChange}
				name='change-group'
				defaultValue={defaultName}
			/>
			<div className='icons'>
				{/* Save edited group name */}
				<div onClick={() => handleEdit(id)}>
					<CheckIcon width='19'/>
				</div>
				{/* Cancel editing */}
				<div onClick={close}>
					<XIcon width='19'/>
				</div>
			</div>
		</div>
	);
}
