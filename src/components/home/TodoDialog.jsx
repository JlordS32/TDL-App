import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/todo.dialog.modules.css';

const Dialog = ({ onClose, isDialogOpen }) => {
	return (
		<dialog
			open
			className={`dialog ${isDialogOpen ? 'dialog-open' : 'dialog-closed'}`}
		>
			<button
				className='close-button'
				onClick={onClose}
			>
				Close
			</button>
			<div>List 1</div>
			<div>List 2</div>
			<div>List 3</div>
		</dialog>
	);
};

export default Dialog;
