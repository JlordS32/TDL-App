import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
   id: '',
   title: '', 
   content: '',
   complete: false,
}

const todoSlice = createSlice({
   name: 'todoReducer',
   initialState: {
      value: [initialStateValue]
   },
   reducers: {
      updateTodo: (state, action) => {
         state.value = action.payload;
      }
   }
});

const filteredSlice = createSlice({
   name: 'filteredReducer',
   initialState: {
      value: [initialStateValue]
   },
   reducers: {
      updateFilteredTodo: (state, action) => {
         state.value = action.payload; 
      }
   }
});

const rootReducer = {
   todos: todoSlice.reducer,
   filteredTodo: filteredSlice.reducer
}

export const { updateTodo } = todoSlice.actions;
export const { updateFilteredTodo } = filteredSlice.actions;

export default rootReducer;