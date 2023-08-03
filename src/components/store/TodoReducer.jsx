import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
	id: '',
	title: '',
	content: '',
	complete: false,
};

const todoSlice = createSlice({
	name: 'todoReducer',
	initialState: {
		value: [initialStateValue],
	},
	reducers: {
		updateTodo: (state, action) => {
			state.value = action.payload;
		},
	},
});

const filteredSlice = createSlice({
	name: 'filteredReducer',
	initialState: {
		value: [initialStateValue],
	},
	reducers: {
		updateFilteredTodo: (state, action) => {
			state.value = action.payload;
		},
	},
});

const groupLabelSlice = createSlice({
	name: 'groupLabelReducer',
	initialState: {
		value: [
			{
				id: '',
				group: '',
			},
		],
	},
	reducers: {
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

export const { updateTodo } = todoSlice.actions;
export const { updateFilteredTodo } = filteredSlice.actions;
export const { updateGroupLabels } = groupLabelSlice.actions;

export default rootReducer;
