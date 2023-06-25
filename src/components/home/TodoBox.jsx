import React from 'react';
import '../../styles/todo.modules.css';

const Todobox = ({item}) => {
   return (
      <div className='todo-box-container'>
         <div className='todo-box'>
            {item}
         </div>
      </div>
   )
}

export default Todobox;