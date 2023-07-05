import React from 'react';
import '../../styles/todo.modules.css';

import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';

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
            <MoreIcon />
         </div>
      </div>
   )
}

export default Todobox;