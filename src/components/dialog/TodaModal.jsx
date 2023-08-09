import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

import '../../styles/todo.modal.modules.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../store/TodoReducer';

const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: '0',
	},
	visible: {
		y: '0',
		transition: {
			duration: 0.2,
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: '0',
	},
};

const TodoModal = ({ handleClose, selectedTodo }) => {
	// Destructing passed array from App component
	const { title, content, id } = selectedTodo;

	const dispatch = useDispatch();

	// Default values
	const defaultValue = {
		title: title,
		content: content,
	};

	// STATESs
	const [modalTitle, setModalTitle] = useState(selectedTodo.title);
	const [modalContent, setModalContent] = useState(selectedTodo.content);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		if (name === 'title') {
			setModalTitle(value);
		} else if (name === 'content') {
			setModalContent(value);
		}
	};

	const todoRedux = useSelector((state) => state.todoReducer.value);

	const updatedTodo = todoRedux.map((todo) => {
		if (todo.id === id) {
			return {
				...todo,
				title: modalTitle,
				content: modalContent,
			};
		}

		return todo;
	});

	useEffect(() => {
		dispatch(updateTodo(updatedTodo));
	}, [modalTitle, modalContent]);

	return (
		<Backdrop
			onClick={handleClose}
			key={id}
		>
			<motion.div className='modal-container-linear-outline'>
				<motion.div
					className='modal-container'
					onClick={(e) => e.stopPropagation()}
					variants={dropIn}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					style={{
						scale: 1,
					}}
				>
					<div className='modaltodo-content'>
						<input
							defaultValue={defaultValue.title}
							type='text'
							className='modal-title-input'
							name='title'
							onChange={handleOnChange}
							placeholder='Enter title...'
						/>
						<textarea
							defaultValue={defaultValue.content}
							className='modal-content-input'
							name='content'
							onChange={handleOnChange}
						/>
					</div>
				</motion.div>
			</motion.div>
		</Backdrop>
	);
};

export default TodoModal;
