import { useEffect, useMemo, useState } from 'react';
import { stringify, v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels } from '../../store/TodoReducer';

const Groups = () => {
	// Local state to hold the value of the input field
	const [newGroup, setNewGroup] = useState('');

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
   }, [dispatch])

	// Function to handle the 'Submit' button click
	const handleClick = () => {
		// Create a new array by adding the new group to the existing groupRedux array
		const updatedGroups = [
			...groupRedux,
			{
				group: newGroup,
				id: uuidv4(),
			},
		];

		// Dispatch the action to update the group labels in Redux store
		dispatch(updateGroupLabels(updatedGroups));

      // creates localStorage
      localStorage.setItem('groups', JSON.stringify(updatedGroups));

		// Clear the input field value after adding the new group
		setNewGroup('');
	};

	// Function to handle input field value change
	const handleOnChange = (e) => {
		// Update the local state with the new input value
		setNewGroup(e.target.value);
	};

	// UseEffect to log the current groupRedux state for debugging
	useEffect(() => {
		console.log(groupRedux);
	}, [groupRedux]);

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
					Submit
				</button>
			</div>
			<div className='group-labels'>
				{/* Use useMemo to optimize rendering of mapped group labels */}
				{useMemo(() => {
					return groupRedux.map((group) => (
						<div
							className='group-label'
							key={group.id}
						>
							{group.group}
						</div>
					));
				}, [groupRedux])}
			</div>
		</>
	);
};

export default Groups;
