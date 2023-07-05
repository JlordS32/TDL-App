import React from 'react';
import '../../styles/todo.modules.css';

import DeleteIcon from '../../assets/icons/DeleteIcon';

const Todobox = ({todo}) => {

   const {
      title,
      content
   } = todo;

   return (
      <div className='todo-container'>
         <div className='title'>
            {title}
         </div>
         <div className='todo-content'>
            {content}
         </div>
         <div className='todo-icons'>
            <DeleteIcon />
         </div>
      </div>
   )
}

export default Todobox;