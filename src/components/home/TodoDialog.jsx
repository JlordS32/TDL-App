import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/todo.dialog.modules.css';

const Dialog = ({ dialogRef, dialogPosition }) => {
	return (
		<dialog
			ref={dialogRef}
			className='dialog-overlay'
			style={{
				position: 'absolute',
				top: dialogPosition.top + 'px',
				left: dialogPosition.left + 'px',
			}}
		>
			<ul>
				<li>List 1</li>
				<li>List 2</li>
				<li>List 3</li>
				<li>List 4</li>
			</ul>
		</dialog>
	);
};

export default Dialog;
