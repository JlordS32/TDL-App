import '../../styles/todo.modules.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../store/TodoReducer';

const Search = () => {

   const todos = useSelector(state => state.todoReducer.value);
   const dispatch = useDispatch();

   const [searchQuery, setSearchQuery] = useState('');

   const handleChange = (e) => {
      setSearchQuery(e.target.value);
   };

   const filteredTodo = todos.filter(todo => {
      const filteredContent = todo.content.toLowerCase().includes(searchQuery.toLowerCase());

      const filteredTitle = todo.title.toLowerCase().includes(searchQuery.toLowerCase());

      if (filteredContent || filteredTitle) {
         return todo;
      }
   });

   useEffect(() => {
      dispatch(updateTodo(filteredTodo));
   }, [searchQuery]);
   

   return (
      <div className='search-container'>
         <input 
            type='text'
            name='search-bar'
            className='search-bar'
            placeholder='Search'
            onChange={handleChange}
         />
      </div>
   )
};

export default Search;