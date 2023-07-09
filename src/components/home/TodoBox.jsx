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

   const { modalOpen, open, close, setModalTodo } = useContext(ModalContext);

   const {
      id,
      content,
      title,
   } = todo;

   const handleDelete = () => {
      console.log(todo);
      onDelete(id);
   };

   const handleClick = () => {
      
      // Sets Todo for the current selected modal.
      setModalTodo(todo);

      // A conditional statement whether modal is opened or not.
      if (!modalOpen) {
         open();
      } else {
         close();
      }
   };

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
               duration: 0.1,
               ease: 'linear',
            }}
            whileHover={{
               scale: 1.02
            }}
         >

         <div 
            onClick={handleClick} className='todo-content-wrapper'>
            <div className='title'>
               {title}
            </div>
            <div className='todo-content'>
               {content}
            </div>
         </div>
         
         <div className='todo-icons' onClick={() => handleDelete()}>
            <div className='todo-icon-item delete-btn' onClick={handleDelete}>
               <DeleteIcon color='white' width='17'/>
            </div>
            <div className='todo-icon-item more-btn'> 
               <MoreIcon width='17'/>
            </div>
         </div>
      </motion.div>
   )
};

export default Todobox;