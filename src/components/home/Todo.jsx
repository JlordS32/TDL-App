import React, { useState, useEffect, useMemo } from 'react';
import Todobox from './TodoBox';
import '../../styles/todo.modules.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../store/TodoReducer';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Dialog from './TodoDialog';

const Todo = () => {
	// State to hold the new todo input values
	const [newTodo, setNewTodo] = useState('');
	const [newTodoTitle, setNewTodoTitle] = useState('');

	// Access the todos array from the Redux store
	const todoRedux = useSelector((state) => state.todoReducer.value);
	const filteredTodoRedux = useSelector(
		(state) => state.filteredReducer.value
	);
	const dispatch = useDispatch();

	// State to handle the focus and blur events of the todo input
	const [onBlur, setOnBlur] = useState(true);

	const [parent] = useAutoAnimate();

	// Event handler for input change
	const handleInputChange = (e) => {
		switch (e.target.name) {
			case 'title':
				setNewTodoTitle(e.target.value);
				break;
			case 'todo-content':
				setNewTodo(e.target.value);
				break;
			default:
				return;
		}
	};

	// Event handler for the blur event of the todo input
	const handleBlur = (e) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setOnBlur(true);
		}
	};

	// Event handler for the focus event of the todo input
	const handleFocus = (e) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setOnBlur(false);
		}
	};

	// Add a new todo when the input is blurred and not empty
	useEffect(() => {
		if (onBlur) {
			if (newTodo.trim() !== '') {
				const updatedTodos = [
					...todoRedux,
					{
						id: uuidv4(),
						title: newTodoTitle,
						content: newTodo,
						complete: false,
					},
				];

				// Update localStorage with the updated todos
				localStorage.setItem('todos', JSON.stringify(updatedTodos));

				// Dispatch the updateTodo action to update the Redux store
				dispatch(updateTodo(updatedTodos));

				// Clear the input values
				setNewTodo('');
				setNewTodoTitle('');
			}
		}
	}, [onBlur]);

	// Delete a todo when the delete button is clicked
	const handleDelete = (id) => {
		const updatedItems = todoRedux.filter((todo) => todo.id !== id);

		// Update localStorage with the updated todos
		localStorage.setItem('todos', JSON.stringify(updatedItems));

		// Dispatch the updateTodo action to update the Redux store
		dispatch(updateTodo(updatedItems));
	};

	// Load the todos from localStorage on initial render
	useEffect(() => {
		const storedTodos = localStorage.getItem('todos');

		// Dispatch the updateTodo action with the todos from localStorage
		dispatch(updateTodo(storedTodos ? JSON.parse(storedTodos) : []));
	}, []);

	return (
		<>
			<div
				className='newtodo-container'
				tabIndex='0'
				onFocus={handleFocus}
				onBlur={handleBlur}
			>
				<div className='newtodo-box'>
					<input
						type='text'
						value={newTodoTitle}
						onChange={handleInputChange}
						style={{
							display:
								!onBlur || newTodoTitle.trim() !== '' ? '' : 'none',
						}}
						name='title'
						className='newtodo-title'
						placeholder='Enter title...'
					/>
					<textarea
						value={newTodo}
						placeholder='Write a note...'
						onChange={handleInputChange}
						name='todo-content'
						className='newtodo-content'
					/>
				</div>
			</div>
			<div
				className='todos-wrapper'
				ref={parent}
			>
				{useMemo(() => {
					return filteredTodoRedux.map((todo) => (
						<Todobox
							key={todo.id}
							todo={todo}
							onDelete={handleDelete}
						/>
					));
				})}
			</div>
		</>
	);
};

export default Todo;
