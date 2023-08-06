import { useEffect, useMemo, useState, useRef } from 'react';
import { stringify, v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels } from '../../../store/TodoReducer';
import '../../../../styles/groups.modules.css';
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import GroupsModal from './GroupsModal';

const Groups = () => {
	// Local state to hold the value of the input field
	const [newGroup, setNewGroup] = useState('');
	
	const dialogRef = useRef();

	// Auto-Animate
	const [parent] = useAutoAnimate();

	// Redux
	// Access the 'value' property from the groupLabelReducer in Redux store
	const groupRedux = useSelector((state) => state.groupLabelReducer.value);
	const dispatch = useDispatch();

	// UseEffect Hook used for localising the redux states
	useEffect(() => {
		const savedGroups = localStorage.getItem('groups'); // Get localStorage

		// use useDispatch hook for rendering
		if (savedGroups) {
			dispatch(updateGroupLabels(JSON.parse(savedGroups)));
		}
	}, [dispatch]);

	// Function to handle the 'Submit' button click
	const handleClick = () => {
		if (newGroup.trim() !== '') {
			// Create a new array by adding the new group to the existing groupRedux array
			const updatedGroups = [
				...groupRedux,
				{
					name: newGroup,
					id: uuidv4(),
				},
			];

			// Dispatch the action to update the group labels in Redux store
			dispatch(updateGroupLabels(updatedGroups));

			// creates localStorage
			localStorage.setItem('groups', JSON.stringify(updatedGroups));

			// Clear the input field value after adding the new group
			setNewGroup('');
		}
	};

	// Inside your 'Groups' component
	const handleDelete = (groupId) => {
		// Filter out the group to be deleted from the groupRedux array
		const updatedGroups = groupRedux.filter((group) => group.id !== groupId);

		// Dispatch the action to update the group labels in Redux store
		dispatch(updateGroupLabels(updatedGroups));

		// Update localStorage
		localStorage.setItem('groups', JSON.stringify(updatedGroups));
	};

	// Function to handle input field value change
	const handleOnChange = (e) => {
		// Update the local state with the new input value
		setNewGroup(e.target.value);
	};

	const handleGroupModal = (e) => {
		e.preventDefault();
		dialogRef.current.showModal();
	}

	return (
		<>
			<div className='groups-search-wrapper'>
				<input
					type='text'
					onChange={handleOnChange}
					value={newGroup} // Bind the input field to the local state
					style={{
						color: 'black',
					}}
				/>
				<button
					onClick={handleClick}
					style={{
						color: 'black',
					}}
				>
					Add
				</button>
			</div>
			<div
				className='group-labels'
				ref={parent}
			>
				{/* Use useMemo to optimize rendering of mapped group labels */}
				{useMemo(() => {
					return groupRedux.map((group) => (
						<div
							className='group-label'
							key={group.id}
						>
							<h4>{group.name}</h4>
							<div className='icon'>
								<div className='edit' onClick={handleGroupModal}>
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
					));
				})}
			</div>
			<GroupsModal dialogRef={dialogRef} />
		</>
	);
};

export default Groups;
