import React, {
   useContext
} from 'react';
import '../../styles/todo.modules.css';
import { TodoContext } from './Todo';

import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';

const Todobox = ({todo}) => {

   // Using context to access state from Todo component
   // const { setTodos, todos } = useContext(TodoContext);

   const {
      title,
      content,
      id
   } = todo;

   const handleDelete = () => {
      
   }

   return (
      <div className='todo-container'>
         <div className='title'>
            {title}
         </div>
         <div className='todo-content'>
            {content}
         </div>
         <div className='todo-icons'>
            <div className='todo-icon-item delete-btn' onClick={handleDelete}> 
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