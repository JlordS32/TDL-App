import { useEffect, useMemo, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels } from '../../../store/TodoReducer';
import '../../../../styles/groups.modules.css';
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import PlusIcon from '../../../../assets/icons/PlusIcon';
import EditGroups from './EditGroups';
import { update } from 'react-spring';

const Groups = ({ dialogRef }) => {
	// Local state to hold the value of the input field
	const [newGroup, setNewGroup] = useState('');

	// Auto-Animate
	const [parent] = useAutoAnimate();

	// Redux
	// Access the 'value' property from the groupLabelReducer in Redux store
	const groupRedux = useSelector((state) => state.groupLabelReducer.value);
	const dispatch = useDispatch();

	// Function made to update groups.
	const updateGroup = (updatedGroups) => {
		// Dispatch the action to update the group labels in Redux store
		dispatch(updateGroupLabels(updatedGroups));

		// creates localStorage
		localStorage.setItem('groups', JSON.stringify(updatedGroups));
	};

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

			updateGroup(updatedGroups);

			// Clear the input field value after adding the new group
			setNewGroup('');
		}
	};

	// Inside your 'Groups' component
	const handleDelete = (groupId) => {
		// Filter out the group to be deleted from the groupRedux array
		const updatedGroups = groupRedux.filter((group) => group.id !== groupId);

		updateGroup(updatedGroups);
	};

	// Function to handle input field value change
	const handleOnChange = (e) => {
		// Update the local state with the new input value
		setNewGroup(e.target.value);
	};

	const handleEdit = (newGroupName, groupId) => {
		// Map over the groups and update the one with the matching ID
		const updatedGroups = groupRedux.map((group) => {
			 if (group.id === groupId) {
				  return {
						...group,
						name: newGroupName,
				  };
			 }
			 return group;
		});

		// Dispatch the action to update the Redux store
		dispatch(updateGroupLabels(updatedGroups));

		// Update localStorage
		localStorage.setItem('groups', JSON.stringify(updatedGroups));
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

		updateGroup(updatedGroups);
	};

	// UseEffect Hook used for localising the redux states
	useEffect(() => {
		const savedGroups = localStorage.getItem('groups'); // Get localStorage

		// use useDispatch hook for rendering
		if (savedGroups) {
			dispatch(updateGroupLabels(JSON.parse(savedGroups)));
		}
	}, [dispatch]);

	useEffect(() => {
		console.log('Group Redux: ', groupRedux);
	});

	return (
		<>
			<div className='groups-add-wrapper'>
				<div className='groups-add'>
					<input
						type='text'
						onChange={handleOnChange}
						value={newGroup} // Bind the input field to the local state
						className='add-input'
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
							<EditGroups
								edit={(newGroupName) =>
									handleEdit(newGroupName, group.id)
								}
								id={group.id}
								close={() => toggleEdit(group.id)}
							/>
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
