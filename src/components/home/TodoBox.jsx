import React from 'react';
import '../../styles/todo.modules.css';

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
      </div>
   )
}

export default Todobox;