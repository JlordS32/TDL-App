import React, { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import LabelIcon from '../../assets/icons/LabelIcon';
import Dialog from './TodoDialog';
import { ModalContext } from '../App';
import '../../styles/todo.modules.css';

const Todobox = ({ todo, onDelete, dialogRef }) => {
	// Accessing context to manage modal state
	const { modalOpen, open, close, setSelectedTodo } = useContext(ModalContext);

	const { id, content, title } = todo;
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// Function to open the dialog
	const openDialog = () => {
		setIsDialogOpen(!isDialogOpen);
	};

	// Function to handle todo item click
	const handleSelectedTodo = () => {
		setSelectedTodo(todo);
	};

	const handleTodoModal = () => {
		setSelectedTodo(todo);

		// Toggle modal based on its current state
		if (!modalOpen) {
			open();
		} else {
			close();
		}
	};

	const handleGroupModal = () => {
		dialogRef.current.showModal();
	};

	const white = '#F0E8F0';

	return (
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
			onClick={handleSelectedTodo}
		>
			{/* Content of the todo */}
			<div
				className='todo-content-wrapper'
				onClick={handleTodoModal}
			>
				<div className='title'>{title}</div>
				<div className='todo-content'>{content}</div>
			</div>

			{/* Icon buttons */}
			<div className='todo-icons'>
				<div
					className={`todo-icon-item label-btn`}
					onClick={handleGroupModal}
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
					onClick={openDialog}
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
						onClose={() => setIsDialogOpen(!isDialogOpen)}
						isDialogOpen={isDialogOpen}
						onDelete={() => onDelete(id)}
						handleGroupModal={handleGroupModal}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Todobox;
