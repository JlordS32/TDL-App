import { useEffect, useMemo, useState, useRef, useLayoutEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels } from '../../../store/TodoReducer';
import '../../../../styles/groups.modules.css';
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import PlusIcon from '../../../../assets/icons/PlusIcon';
import XIcon from '../../../../assets/icons/XIcon';
import CheckIcon from '../../../../assets/icons/CheckIcon';

const Groups = () => {
	// Local state to hold the value of the input field
	const [newGroup, setNewGroup] = useState('');
	const [newGroupName, setNewGroupName] = useState('');
	const [updatedGroup, setUpdatedGroup] = useState([]);

	// Auto-Animate
	const [parent] = useAutoAnimate();

	// Redux
	// Access the 'value' property from the groupLabelReducer in Redux store
	const groupRedux = useSelector((state) => state.groupLabelReducer.value);
	const dispatch = useDispatch();

	// Function to handle the 'Submit' button click
	const handleClick = () => {
		if (newGroup.trim() !== '') {
			// Create a new array by adding the new group to the existing groupRedux array
			const updatedGroups = [
				...groupRedux,
				{
					name: newGroup,
					id: uuidv4(),
					isEditing: false,
				},
			];

			setUpdatedGroup(updatedGroups);

			// Clear the input field value after adding the new group
			setNewGroup('');
		}
	};

	// Inside your 'Groups' component
	const handleDelete = (groupId) => {
		// Filter out the group to be deleted from the groupRedux array
		const updatedGroups = groupRedux.filter((group) => group.id !== groupId);

		setUpdatedGroup(updatedGroups);
	};

	// Function to handle input field value change
	const handleOnChange = (e) => {
		const { name, value } = e.target;

		// Update the corresponding state based on the input name
		switch (name) {
			case 'add-group':
				setNewGroup(value);
				break;
			case 'change-group':
				setNewGroupName(value);
				break;
			default:
				break;
		}
	};

	// Handle the editing process
	const handleEdit = (groupId) => {
		// Map over the groups and update the one with the matching ID
		const updatedGroups = groupRedux.map((group) => {
			if (group.id === groupId) {
				return {
					...group,
					name: newGroupName,
					isEditing: false
				};
			}
			return group;
		});

		setUpdatedGroup(updatedGroups);
	};

	const toggleEdit = (groupId) => {
		// Filter out the group to be deleted from the groupRedux array
		const updatedGroups = groupRedux.map((group) => {
			if (group.id === groupId) {
				return {
					...group,
					isEditing: group.isEditing ? false : true,
				};
			}

			return group;
		});

		setUpdatedGroup(updatedGroups);
	};

	// Use effect for updating redux and localStorage
	useEffect(() => {
		dispatch(updateGroupLabels(updatedGroup));

		// creates localStorage
		localStorage.setItem('groups', JSON.stringify(updatedGroup));
	}, [updatedGroup]);

	// UseEffect Hook used for localising the redux states
	useEffect(() => {
		const savedGroups = localStorage.getItem('groups'); // Get localStorage

		console.log('i am running, localising...')

		// use useDispatch hook for rendering
		if (savedGroups) {
			dispatch(updateGroupLabels(JSON.parse(savedGroups)));
		}
	}, [updatedGroup]);

	return (
		<>
			<div className='groups-add-wrapper'>
				<div className='groups-add'>
					<input
						type='text'
						onChange={handleOnChange}
						value={newGroup} // Bind the input field to the local state
						className='add-input'
						name='add-group'
					/>
					<div
						onClick={handleClick}
						style={{
							color: 'black',
						}}
					>
						<PlusIcon width='22' />
					</div>
				</div>
			</div>
			<div
				className='group-labels'
				ref={parent}
			>
				{/* Use useMemo to optimize rendering of mapped group labels */}
				{useMemo(() => {
					return groupRedux.map((group) =>
						group.isEditing ? (
							<div
								className='edit-container'
								key={group.id}
							>
								{/* Input field for editing group name */}
								<input
									type='text'
									onChange={handleOnChange}
									name='change-group'
									value={newGroupName}
								/>
								<div className='icons'>
									{/* Save edited group name */}
									<div onClick={() => handleEdit(group.id)}>
										<CheckIcon />
									</div>
									{/* Cancel editing */}
									<div onClick={() => toggleEdit(group.id)}>
										<XIcon />
									</div>
								</div>
							</div>
						) : (
							<div
								className='group-label'
								key={group.id}
							>
								<h4>{group.name}</h4>
								<div className='icons'>
									<div
										className='edit'
										onClick={() => toggleEdit(group.id)}
									>
										<EditIcon
											width='17'
											height='17'
										/>
									</div>
									<div
										onClick={() => handleDelete(group.id)}
										className='delete'
									>
										<DeleteIcon
											width='17'
											height='17'
										/>
									</div>
								</div>
							</div>
						)
					);
				})}
			</div>
		</>
	);
};

export default Groups;
