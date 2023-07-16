import '../../styles/todo.modules.css';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredTodo } from '../store/TodoReducer';
import SearchIcon from '../../assets/icons/SearchIcon';

const Search = () => {

   const todoReducer = useSelector(state => state.todoReducer.value);
   const dispatch = useDispatch();

   const [searchQuery, setSearchQuery] = useState('');

   const handleSubmit = (e) => {
      if (e.key === 'Enter') {
         setSearchQuery(e.target.value);
      }
   };

   const filteredTodo = useMemo(() => {
      return (
         todoReducer.filter(todo => {
            const filteredContent = todo.content.toLowerCase().includes(searchQuery.toLowerCase());
      
            const filteredTitle = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
      
            if (filteredContent || filteredTitle) {
               return todo;
            }
         })
      )
   });
   
   // Listens if the todo slate in our redux has changed.
   useEffect(() => {
      dispatch(updateFilteredTodo(filteredTodo));
   }, [todoReducer, searchQuery]);

   return (
      <div className='search-container'>
         <div className='input-icons'>
            <SearchIcon color='#F0E8F0' width='17'/>
         </div>
         <input 
            type='text'
            name='search-bar'
            className='search-bar'
            placeholder='Search'
            onKeyDown={handleSubmit}
         />
      </div>
   )
};

export default Search;