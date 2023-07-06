import '../../styles/todo.modules.css';
import { 
   useContext
} from 'react';

import { motion } from 'framer-motion';

// SVG Imports
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MoreIcon from '../../assets/icons/MoreIcon';

// Importing context
import { ModalContext } from '../App';

const Todobox = ({todo, onDelete}) => {
   // Using context to access state from Todo component
   // const { setTodos, todos } = useContext(TodoContext);

   const { modalOpen, open, close} = useContext(ModalContext);

   const {
      id,
      content,
      title,
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
            duration: 0.15,
            ease: 'linear',
         }}

         onClick={() => (modalOpen ? close() : open())}
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