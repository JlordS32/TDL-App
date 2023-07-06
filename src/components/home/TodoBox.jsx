import React, {
   useContext
} from 'react';
import '../../styles/todo.modules.css';

import { motion } from 'framer-motion';

// SVG Imports
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';

const Todobox = ({todo, onDelete}) => {

   // Using context to access state from Todo component
   // const { setTodos, todos } = useContext(TodoContext);

   const {
      id,
      content,
      title,
      complete
   } = todo;

   const handleDelete = () => {
      console.log(todo);
      onDelete(id);
   }

   return (
      <motion.div className='todo-container'
         initial={{ 
            opacity: 0, 
            scale: 0.7 
         }} 
         animate={{ 
            opacity: 1, 
            scale: 1 
         }} 
         transition={{ 
            duration: 0.25,
            ease: 'linear',
            x: {
               duration: 1
            }
         }}
      >
         <div className='title'>
            {title}
         </div>
         <div className='todo-content'>
            {content}
         </div>
         <div className='todo-icons' onClick={() => handleDelete()}>
              <div className='todo-icon-item delete-btn' onClick={handleDelete}>
                <DeleteIcon color='white'/>
              </div>
              <div className='todo-icon-item more-btn'> 
                <MoreIcon />
              </div>
         </div>
      </motion.div>
   )
}

export default Todobox;