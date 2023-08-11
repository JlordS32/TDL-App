// Import necessary hooks and components
import { useEffect, useMemo, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels } from '../../../store/TodoReducer';
import '../../../../styles/groups.modules.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { EditGroup } from './Edit';

// Import icons
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import PlusIcon from '../../../../assets/icons/PlusIcon';

// Define the 'Groups' component
const Groups = () => {
	// Local state to hold the value of the input field
	const [newGroup, setNewGroup] = useState('');
	const [newGroupName, setNewGroupName] = useState(''); // Auto-Animate

	// Auto-animate parent reference
	const [parent] = useAutoAnimate();

	// Redux: Access the 'value' property from the groupLabelReducer in Redux store
	const groupRedux = useSelector((state) => state.groupLabelReducer.value);
	const dispatch = useDispatch();

	// Function to update Redux state and localStorage
	const updateGroup = (updatedGroups) => {
		localStorage.setItem('groups', JSON.stringify(updatedGroups));
		dispatch(updateGroupLabels(updatedGroups));
	};

	// Event handler for the 'Submit' button click
	const handleClick = useCallback(() => {
		if (newGroup.trim() !== '') {
			const updatedGroups = [
				...groupRedux,
				{
					name: newGroup,
					id: uuidv4(),
					isEditing: false,
				},
			];
			updateGroup(updatedGroups);
			setNewGroup('');
		}
	}, [groupRedux, newGroup, updateGroup]);

	// Event handler for deleting a group
	const handleDelete = useCallback(
		(groupId) => {
			const updatedGroups = groupRedux.filter(
				(group) => group.id !== groupId
			);
			updateGroup(updatedGroups);
		},
		[groupRedux, updateGroup]
	);

	// Event handler for input field value change
	const handleOnChange = (e) => {
		const { name, value } = e.target;
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

	// Event handler for editing a group
	const handleEdit = useCallback(
		(groupId) => {
			const updatedGroups = groupRedux.map((group) => {
				if (group.id === groupId) {
					return {
						...group,
						name: newGroupName.trim() !== '' ? newGroupName : group.name,
						isEditing: group.isEditing ? false : true,
					};
				}
				return group;
			});
			updateGroup(updatedGroups);
			setNewGroupName('');
		},
		[groupRedux, newGroupName, updateGroup]
	);

	// Optimize rendering of mapped group labels using useMemo
	const memoizedGroupLabels = useMemo(() => {
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
					className='group-label'
					key={group.id}
				>
					<h4>{group.name}</h4>
					<div className='icons'>
						<div
							className='edit'
							onClick={() => {
								handleEdit(group.id);
							}}
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
	}, [groupRedux, handleEdit, handleOnChange]);

	// Return JSX for rendering the component
	return (
		<>
			{/* Input field for adding new groups */}
			<div className='groups-add-wrapper'>
				<div className='groups-add'>
					<input
						type='text'
						onChange={handleOnChange}
						value={newGroup}
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
			{/* Render the group labels */}
			<div
				className='group-labels'
				ref={parent}
			>
				{memoizedGroupLabels}
			</div>
		</>
	);
};

// Export the 'Groups' component
export default Groups;
