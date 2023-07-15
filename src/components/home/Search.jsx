import '../../styles/todo.modules.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredTodo } from '../store/TodoReducer';

const Search = () => {

   const todoReducer = useSelector(state => state.todoReducer.value);
   const filteredTodoReducer = useSelector(state => state.filteredReducer.value);
   const dispatch = useDispatch();

   const [searchQuery, setSearchQuery] = useState('');

   const handleChange = (e) => {
      setSearchQuery(e.target.value);
   };

   const filteredTodo = todoReducer.filter(todo => {
      const filteredContent = todo.content.toLowerCase().includes(searchQuery.toLowerCase());

      const filteredTitle = todo.title.toLowerCase().includes(searchQuery.toLowerCase());

      if (filteredContent || filteredTitle) {
         return todo;
      }
   });

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         dispatch(updateFilteredTodo(filteredTodo));
      }
   };
   
   // Listens if the todo slate in our redux has changed.
   useEffect(() => {
      if (searchQuery === '') {
         dispatch(updateFilteredTodo(filteredTodo));
      }
   }, [todoReducer, searchQuery]);
   
   useEffect(() => {
      console.log(filteredTodoReducer);
   }, [filteredTodoReducer]);

   return (
      <div className='search-container'>
         <input 
            type='text'
            name='search-bar'
            className='search-bar'
            placeholder='Search'
            onChange={handleChange}
            onKeyDown={handleKeyPress}
         />
      </div>
   )
};

export default Search;