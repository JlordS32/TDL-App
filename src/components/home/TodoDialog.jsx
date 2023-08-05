import React, { useEffect, useRef } from 'react';
import '../../styles/todo.dialog.modules.css';

const Dialog = ({ isDialogOpen, onClose }) => {
	const dialogRef = useRef();

	const handleBlur = () => {
		onClose();
	};

	useEffect(() => {
		dialogRef.current.focus();
	}, []);

	return (
		<dialog
			open
			className={`dialog ${isDialogOpen ? 'dialog-open' : 'dialog-closed'}`}
			onBlur={handleBlur}
			ref={dialogRef}
		>
			<div>Groups</div>
			<div>Favourite</div>
			<div>Delete</div>
		</dialog>
	);
};

export default Dialog;
