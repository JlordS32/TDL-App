// Import necessary hooks and components
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels } from '../../../store/TodoReducer';
import '../../../../styles/groups.modules.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { EditGroup } from './Edit';

// Import icons
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import PlusIcon from '../../../../assets/icons/PlusIcon';

// Utility functions
import { addGroup, deleteGroup, editGroup } from './groupUtils';

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

	useEffect(() => {
		console.log(groupRedux)
	}, [groupRedux])

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
			<div className='groups-add-wrapper' ref={parent}>
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
				ref={parent} // TODO we better fucking fix this animation too...
			>
				{memoizedGroupLabels}
			</div>
		</>
	);
};

// Export the 'Groups' component
export default Groups;
