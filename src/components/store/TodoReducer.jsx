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
      value: initialStateValue
   },
   reducers: {
      updateTodo: (state, action) => {
         state.value = action.payload;
      }
   }
});

export const { updateTodo } = todoSlice.actions;

export default todoSlice.reducer;