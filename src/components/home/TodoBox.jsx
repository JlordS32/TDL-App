import '../../styles/todo.modules.css';
import { useContext, useState, useRef, useEffect } from 'react';

import { motion } from 'framer-motion';

// SVG Imports
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import LabelIcon from '../../assets/icons/LabelIcon';
import Dialog from './TodoDialog';

// Importing context
import { ModalContext } from '../App';

const Todobox = ({ todo, onDelete }) => {
	// Using context to access state from Todo component
	// const { setTodos, todos } = useContext(TodoContext);

	const { modalOpen, open, close, setSelectedTodo } = useContext(ModalContext);

	const { id, content, title } = todo;
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
	const itemRef = useRef(null);

	const dialogRef = useRef();

	const openDialog = () => {
		setIsDialogOpen(isDialogOpen ? false : true);

		switch (isDialogOpen) {
			case true:
				dialogRef.current.show();
				break;
			case false:
				dialogRef.current.close();
			default:
				break;
		}

		const rect = itemRef.current.getBoundingClientRect();
		setDialogPosition({
			top: rect.top + rect.height, // Position below the item
			left: rect.left, // Align with the left edge of the item
		});
	};

	const handleClick = () => {
		// Sets Todo for the current selected modal.
		setSelectedTodo(todo);

		// A conditional statement whether modal is opened or not.
		if (!modalOpen) {
			open();
		} else {
			close();
		}
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
				whileHover={{
					scale: 1.02,
				}}
				ref={itemRef}
			>
				<div
					onClick={handleClick}
					className='todo-content-wrapper'
				>
					<div className='title'>{title}</div>
					<div className='todo-content'>{content}</div>
				</div>

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
						onClick={() => openDialog()}
					>
						<MoreIcon
							width='17'
							color={white}
						/>
					</div>
				</div>
			</motion.div>
			<Dialog dialogRef={dialogRef} dialogPosition={dialogPosition}/>
		</>
	);
};

export default Todobox;
