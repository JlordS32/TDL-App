import React, { useState, useEffect, useRef } from 'react';
import Todobox from './TodoBox';
import '../../styles/todo.modules.css';
import { v4 as uuidv4 } from 'uuid';

// SVG Imports
import deleteIcon from '../../assets/icons/trash.svg'

import { useAutoAnimate } from '@formkit/auto-animate/react'

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [newTodoTitle, setNewTodoTitle] = useState('');
  
  const [todos, setTodos] = useState([]);
  const [onBlur, setOnBlur] = useState(true);

  // Destructures the first index for AutoAnimate
  // It is used as a hook for applicable classes that'll need the soft animation when deleted or appending new items.
  const [parent] = useAutoAnimate();

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
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOnBlur(true);
    }
  };

  const handleFocus = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOnBlur(false);
    }
  };

  useEffect(() => {
    if (onBlur) {
      if (newTodo.trim() !== '') {

        const title = newTodoTitle.trim() !== '' ? newTodoTitle : 'No Title';

        setTodos((todos) => [...todos, { 
          id: uuidv4(), 
          title: title, 
          content: newTodo, 
          complete: false }]);

        setNewTodo('');
        setNewTodoTitle('');
      }
    }
  }, [onBlur]);

  
  return (
    <>
      <div
        className='newtodo-container'
        tabIndex='0'
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={parent}
      >
        <div className='newtodo-box' ref={parent}>
          <input
            type='text'
            value={newTodoTitle}
            onChange={handleInputChange}
            style={{
              display: !onBlur || newTodoTitle.trim() !== '' ? '' : 'none'
            }}
            name='title'
            className='newtodo-title'
            placeholder='Enter title...'
          />
          <textarea
            value={newTodo}
            placeholder='Type a note...'
            onChange={handleInputChange}
            name='todo-content'
            className='newtodo-content'
          />
        </div>
      </div>
      <div className='todos-wrapper' ref={parent}>
        {todos.map(todo => (
          <Todobox key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default Todo;
