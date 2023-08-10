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

const Groups = ({ dialogRef }) => {
	// Local state to hold the value of the input field
	const [newGroup, setNewGroup] = useState('');

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

	const handleEdit = (newGroupName, id) => {
		if (newGroupName.trim() !== '') {
			const updatedGroupName = groupRedux.map((group) => {
				if (group.id === id) {
					return {
						...group,
						name: newGroupName,
					};
				}

				return group;
			});

			dispatch(updateGroupLabels(updatedGroupName));

			localStorage.setItem('groups', JSON.stringify(updatedGroupName));
		}
	};

	const toggleEdit = (groupId) => {
		// Filter out the group to be deleted from the groupRedux array
		const updatedGroups = groupRedux.map((group) => {
			if (group.id === groupId) {
				return {
					...group,
					isEditing: true,
				};

				return group;
			}
		});

		// Dispatch the action to update the group labels in Redux store
		dispatch(updateGroupLabels(updatedGroups));

		// Update localStorage
		localStorage.setItem('groups', JSON.stringify(updatedGroups));
	};

	useEffect(() => {
		console.log(groupRedux);
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
								edit={handleEdit}
								id={group.id}
								close={() => setIsEdit(false)}
							/>
						) : (
							<div
								className='group-label'
								key={group.id}
							>
								<h4>{group.name}</h4>
								<div className='icon'>
									<div
										className='edit'
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
