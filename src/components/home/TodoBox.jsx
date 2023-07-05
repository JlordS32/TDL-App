import React from 'react';
import '../../styles/todo.modules.css';

import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';

const Todobox = ({todo}) => {

   const {
      title,
      content
   } = todo;

   const handleClick = (e) => {
      alert('Deleted!');
      console.log(e.target.name);
   }

   return (
      <div className='todo-container'>
         <div className='title'>
            {title}
         </div>
         <div className='todo-content'>
            {content}
         </div>
         <div className='todo-icons' onClick={handleClick}>
            <div className='todo-icon-item delete-btn'> 
               <DeleteIcon color='white'/>
            </div>
            <div className='todo-icon-item more-btn'> 
               <MoreIcon />
            </div>
         </div>
      </div>
   )
}

export default Todobox;