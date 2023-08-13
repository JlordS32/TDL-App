import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
	id: '',
	title: '',
	content: '',
	group: [
		{
			name: '',
			id: '',
		},
	],
	complete: false,
};

const filteredSlice = createSlice({
	name: 'filteredReducer',
	initialState: {
		value: [
			{
				...initialStateValue,
				searchQuery: '',
			},
		],
	},
	reducers: {
		updateFilteredTodo: (state, action) => {
			state.value = action.payload;
		},
	},
});

const todoSlice = createSlice({
	name: 'todoReducer',
	initialState: {
		value: [initialStateValue],
	},
	reducers: {
		updateTodo: (state, action) => {
			state.value = action.payload;
		},
		adjustTodosOnGroupDelete: (state, action) => {
			const deletedGroupId = action.payload;

			// Update the state.value array without mutating it
			state.value = state.value.map((todo) => ({
				...todo,
				group: todo.group
					? todo.group.filter((group) => group.id !== deletedGroupId)
					: [],
			}));
		},
	},
});

const groupLabelSlice = createSlice({
	name: 'groupLabelReducer',
	initialState: {
		value: [
			{
				id: '',
				name: '',
				isEditing: false,
			},
		],
	},
	reducers: {
		deleteGroups: (state, action) => {
			const deletedGroupId = action.payload;
			state.value = state.value.filter(
				(group) => group.id !== deletedGroupId
			);
		},
		updateGroupLabels: (state, action) => {
			state.value = action.payload;
		},
	},
});

const rootReducer = {
	todos: todoSlice.reducer,
	filteredTodo: filteredSlice.reducer,
	groupLabel: groupLabelSlice.reducer,
};

export const { updateTodo, adjustTodosOnGroupDelete } = todoSlice.actions;
export const { updateFilteredTodo } = filteredSlice.actions;
export const { updateGroupLabels, deleteGroups } = groupLabelSlice.actions;

export default rootReducer;
