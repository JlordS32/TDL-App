import React, {
   useState,
   useEffect,
   useRef
} from 'react';
import Todobox from './TodoBox';

import '../../styles/todo.modules.css';''

const Todo = () => {

   const [newTodo, setNewTodo] = useState('');
   const [newTodoTitle, setNewTodoTitle] = useState('');

   const [todos, setTodos] = useState([]);

   const textareaRef = useRef();

   const handleInputChange = (e) => {
      switch (e.target.name) {
         case 'title':
            setNewTodoTitle(e.target.value);
            break;
         case 'todo-content':
            setNewTodo(e.target.value);
            break;
         default:
            return 
      }
   }

   const handleClick = () => {
      if (newTodo.trim() !== '') {
         const title = newTodoTitle;
         const content = newTodo;

         setTodos(todos => [...todos, { title, content }]);
         setNewTodo('');
         setNewTodoTitle('');
      }
   }

   useEffect(() => {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight - 10}px`;

   }, [newTodo]);

   return (
      <>
         <div className='newtodo-container'>
            <div className='newtodo-box'>
               <input 
                  type='text'
                  value={newTodoTitle}     
                  onChange={handleInputChange}
                  name='title'
                  className='newtodo-title'
                  placeholder='Enter title...'
               />
               <textarea  
                  value={newTodo}
                  ref={textareaRef}     
                  onChange={handleInputChange}
                  name='todo-content'
                  className='newtodo-content'
               />
               <button onClick={handleClick} className='newtodo-submit'>Submit</button>
            </div>
         </div>
         <div className='todos-wrapper'>
            {todos.map(todo => {
               return <Todobox todo={todo}/>;
            })}
         </div>
      </>
   )
}

export default Todo;