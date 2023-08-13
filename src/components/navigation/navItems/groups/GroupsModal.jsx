import React, { useEffect, useMemo, useState } from 'react';
import Modal from '../../../dialog/Modal';
import styles from '../../../../styles/groups.modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels, updateTodo } from '../../../store/TodoReducer';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { EditGroup } from './Edit';

//Icons
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import PlusIcon from '../../../../assets/icons/PlusIcon';

// Utility functions
import { addGroup, deleteGroup, editGroup } from './groupUtils';

const GroupsModal = ({ dialogRef, selectedTodo }) => {
	// local States
	const [newGroup, setNewGroup] = useState('');
	const [newGroupName, setNewGroupName] = useState('');

	const groupRedux = useSelector((state) => state.groupLabelReducer.value);
	const todoRedux = useSelector((state) => state.todoReducer.value);
	const dispatch = useDispatch();

	const [parent] = useAutoAnimate();

	// Function to update Redux state and localStorage
	const updateGroup = (updatedGroups) => {
		localStorage.setItem('groups', JSON.stringify(updatedGroups));
		dispatch(updateGroupLabels(updatedGroups));
	};

	const updateTodos = (updatedTodo) => {
		localStorage.setItem('todos', JSON.stringify(updatedTodo));
		dispatch(updateTodo(updatedTodo));
	};

	// Event handler for the 'Submit' button click
	const handleClick = () => {
		addGroup(newGroup, groupRedux, updateGroup);
		setNewGroup('');
	};

	// Event handler for deleting a group
	const handleDelete = (groupId) => {
		deleteGroup(groupId, groupRedux, updateGroup);
	};

	// Event handler for editing a group
	const handleEdit = (groupId) => {
		editGroup(groupId, groupRedux, newGroupName, updateGroup);
		setNewGroupName('');
	};

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'add-btn':
				setNewGroup(value);
				break;
			case 'change-group':
				setNewGroupName(value);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		console.log(todoRedux);
	}, [todoRedux]);

	return (
		<Modal
			dialogRef={dialogRef}
			width={600}
			height={700}
		>
			<div className={styles['groups-modal']}>
				<div className={styles['search-bar']}>
					<input
						className={styles['add-btn']}
						onChange={handleOnChange}
						name='add-btn'
					/>
					<div
						style={{
							color: 'black',
						}}
						onClick={handleClick}
					>
						<PlusIcon width='30' />
					</div>
				</div>
				<div
					className={styles['labels']}
					ref={parent}
				>
					{useMemo(() => {
						return groupRedux.map((group) =>
							group.isEditing ? (
								<EditGroup
									handleOnChange={handleOnChange}
									handleEdit={handleEdit}
									close={() => handleEdit(group.id)}
									key={group.id}
									id={group.id}
									defaultName={group.name}
								/>
							) : (
								<Group
									handleEdit={handleEdit}
									handleDelete={handleDelete}
									group={group}
									updateTodos={updateTodos}
									todoRedux={todoRedux}
									selectedTodo={selectedTodo}
									key={group.id}
								/>
							)
						);
					})}
				</div>
			</div>
		</Modal>
	);
};

export default GroupsModal;

const Group = ({
	updateTodos,
	handleEdit,
	handleDelete,
	group,
	todoRedux,
	selectedTodo,
}) => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckbox = () => {
		setIsChecked((prevChecked) => !prevChecked);

		const updatedTodo = todoRedux.map((todo) => {
			if (todo.id === selectedTodo.id) {
				const groupExists = todo.group.some(
					(existingGroup) => existingGroup.id === group.id
				);

				if (isChecked) {
					// Remove the group
					const updatedGroups = todo.group.filter(
						(existingGroup) => existingGroup.id !== group.id
					);

					return {
						...todo,
						group: updatedGroups,
					};
				} else if (!groupExists) {
					// Add the group
					const newGroup = {
						id: group.id,
						name: group.name,
					};

					const updatedGroups = [...todo.group, newGroup];

					return {
						...todo,
						group: updatedGroups,
					};
				}
			}

			return todo;
		});

		updateTodos(updatedTodo);
	};

	return (
		<div
			className={styles['label']}
			key={group.id}
		>
			<h4>{group.name}</h4>
			<div className={styles['icons']}>
				<input
					className={styles['add-to-group']}
					type='checkbox'
					checked={isChecked}
					onChange={toggleCheckbox}
				/>
				<div
					className={styles['edit']}
					onClick={() => handleEdit(group.id)}
				>
					<EditIcon
						width='20'
						height='20'
					/>
				</div>
				<div
					className={styles['delete']}
					onClick={() => handleDelete(Group.id)}
				>
					<DeleteIcon
						width='20'
						height='20'
					/>
				</div>
			</div>
		</div>
	);
};
