import React, {
   useContext
} from 'react';
import '../../styles/todo.modules.css';

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
      onDelete(id);
   }

   return (
      <div className='todo-container'>
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
      </div>
   )
}

export default Todobox;