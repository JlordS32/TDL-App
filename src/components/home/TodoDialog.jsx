import React, { useEffect, useRef } from 'react';
import '../../styles/todo.dialog.modules.css';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import LabelIcon from '../../assets/icons/LabelIcon';
import StarIcon from '../../assets/icons/StarIcon';

const Dialog = ({ isDialogOpen, onDelete, onClose }) => {
	const dialogRef = useRef();

	const handleBlur = () => {
		onClose();
	};

	useEffect(() => {
		dialogRef.current.focus();
	}, []);

	const dialogTitles = {
		delete: 'Delete',
		fav: 'Favourite',
		group: 'Groups',
	};

	return (
		<dialog
			open
			className={`dialog ${isDialogOpen ? 'dialog-open' : 'dialog-closed'}`}
			onBlur={handleBlur}
			ref={dialogRef}
		>
			<div className='icons'>
				<div className='option'>
					<div
						style={{
							marginRight: '10px',
						}}
					>
						<LabelIcon width='17' />
					</div>
					{dialogTitles.group}
				</div>
			</div>
			<div className='icons'>
				<div className='option'>
					<div
						style={{
							marginRight: '10px',
						}}
					>
						<StarIcon width='17' />
					</div>
					{dialogTitles.fav}
				</div>
			</div>
			<div
				className='icons
				dialog-delete-option'
				onClick={onDelete}
			>
				<div className='option'>
					<div
						style={{
							marginRight: '10px',
						}}
					>
						<DeleteIcon width='17' />
					</div>
					{dialogTitles.delete}
				</div>
			</div>
		</dialog>
	);
};

export default Dialog;
