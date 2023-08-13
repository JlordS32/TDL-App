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
	const [isChecked, setIsChecked] = useState(false);

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

	const handleAddToGroup = (groupId, groupName) => {
		setIsChecked(isChecked ? false : true);

		if (isChecked) {
			const updatedTodo = todoRedux.map((todo) => {
				if (todo.id === selectedTodo.id) {
					const groupExists = todo.group.some(
						(existingGroup) => existingGroup.id === groupId
					);

					// Create a new group object
					if (!groupExists) {
						const newGroup = {
							id: groupId,
							name: groupName,
						};

						// Create a copy of the existing groups array and append the new group
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
											onChange={() =>
												handleAddToGroup(group.id, group.name)
											}
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
											onClick={() => handleDelete(group.id)}
										>
											<DeleteIcon
												width='20'
												height='20'
											/>
										</div>
									</div>
								</div>
							)
						);
					})}
				</div>
			</div>
		</Modal>
	);
};

export default GroupsModal;

    function undefined({isChecked, handleAddToGroup, handleEdit, handleDelete}) {
      return (<div className={styles['label']} key={group.id}>
									<h4>{group.name}</h4>
									<div className={styles['icons']}>
										<input className={styles['add-to-group']} type='checkbox' checked={isChecked} onChange={() => handleAddToGroup(group.id, group.name)} />
										<div className={styles['edit']} onClick={() => handleEdit(group.id)}>
											<EditIcon width='20' height='20' />
										</div>
										<div className={styles['delete']} onClick={() => handleDelete(group.id)}>
											<DeleteIcon width='20' height='20' />
										</div>
									</div>
								</div>);
    }
  