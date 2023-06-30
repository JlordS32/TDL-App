import React, { useState, useEffect, useRef } from 'react';
import Todobox from './TodoBox';

import '../../styles/todo.modules.css';

const Todo = () => {
   const [newTodo, setNewTodo] = useState('');
   const [newTodoTitle, setNewTodoTitle] = useState('');
   const [todos, setTodos] = useState([]);

   const [onBlurText, setOnBlurText] = useState(false);

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
         return;
      }
   };

   const handleBlur = (e) => {
      setOnBlurText(false);

      console.log(`I'm leaving ${e.target.name} at the moment hehe...`);
   };

   const handleFocus = (e) => {
      setOnBlurText(true);

      console.log(`I'm touching ${e.target.name} at the moment hehe...`);
   }

   useEffect(() => {
      // Dynamically adjust the textarea height based on content
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 150}px`;
   }, [newTodo]);

   useEffect(() => {
      if (onBlurText) {
         if (newTodo.trim() !== '') {
            const title = newTodoTitle.trim() !== '' ? newTodoTitle : 'No Title';
            const content = newTodo;
   
            setTodos((todos) => [...todos, { title, content }]);
            setNewTodo('');
         }
      }
   }, [onBlurText]);

   return (
      <>
         <div className='newtodo-container'>
         <div className='newtodo-box'>
            <input
               type='text'
               value={newTodoTitle}
               onChange={handleInputChange}
               onBlur={handleBlur}
               onFocus={handleFocus}
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
               onFocusCapture={handleFocus}
               onBlur={handleBlur}
            />
         </div>
         </div>
         <div className='todos-wrapper'>
         {todos.map((todo, index) => (
            <Todobox key={index} todo={todo} />
         ))}
         </div>
      </>
   );
};

export default Todo;
