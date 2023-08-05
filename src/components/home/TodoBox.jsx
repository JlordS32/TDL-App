import React, { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import LabelIcon from '../../assets/icons/LabelIcon';
import Dialog from './TodoDialog';
import { ModalContext } from '../App';
import '../../styles/todo.modules.css'; // Import your CSS file

const Todobox = ({ todo, onDelete }) => {
	// Accessing context to manage modal state
	const { modalOpen, open, close, setSelectedTodo } = useContext(ModalContext);

	const { id, content, title } = todo;
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// Function to open the dialog
	const openDialog = () => {
		setIsDialogOpen(true);
	};

	// Function to close the dialog
	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	// Function to handle todo item click
	const handleClick = () => {
		setSelectedTodo(todo);

		// Toggle modal based on its current state
		if (!modalOpen) {
			open();
		} else {
			close();
		}
	};

	// Function to toggle the dialog's open/close state
	const toggleDialog = () => {
		if (isDialogOpen) {
			closeDialog();
		} else {
			closeAllDialogs();
			openDialog();
		}
	};

	// Function to close all dialogs
	const closeAllDialogs = () => {
		const allDialogs = document.querySelectorAll('.dialog');
		allDialogs.forEach((dialog) => {
			dialog.close();
		});
	};

	const white = '#F0E8F0';

	return (
		<>
			<motion.div
				className='todo-container'
				initial={{
					opacity: 0,
					scale: 0.7,
				}}
				animate={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 0.1,
					ease: 'linear',
				}}
			>
				{/* Content of the todo */}
				<div
					onClick={handleClick}
					className='todo-content-wrapper'
				>
					<div className='title'>{title}</div>
					<div className='todo-content'>{content}</div>
				</div>

				{/* Icon buttons */}
				<div className='todo-icons'>
					<div
						className='todo-icon-item label-btn'
						onClick={() => alert('hello world')}
					>
						<LabelIcon
							width='17'
							color={white}
						/>
					</div>
					<div
						className='todo-icon-item delete-btn'
						onClick={() => onDelete(id)}
					>
						<DeleteIcon
							color={white}
							width='17'
						/>
					</div>
					<div
						className='todo-icon-item more-btn'
						onClick={toggleDialog}
					>
						<MoreIcon
							width='17'
							color={white}
						/>
					</div>
				</div>

				{/* Render the dialog when it's open */}
				<AnimatePresence>
					{isDialogOpen && (
						<Dialog
							onClose={closeDialog}
							isDialogOpen={isDialogOpen}
						/>
					)}
				</AnimatePresence>
			</motion.div>
		</>
	);
};

export default Todobox;
