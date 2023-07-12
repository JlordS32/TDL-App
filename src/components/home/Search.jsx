import '../../styles/todo.modules.css';
import React from 'react';

const Search = () => {
   return (
      <div className='search-container'>
         <input 
            type='text'
            name='search-bar'
            className='search-bar'
            placeholder='Search'
         />
      </div>
   )
};

export default Search;