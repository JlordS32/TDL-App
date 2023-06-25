import React, {
   useState,
   useEffect
} from 'react';
import Todobox from './TodoBox';

import '../../styles/todo.modules.css';''

const Todo = () => {

   const [newTodo, setNewTodo] = useState('');
   const [todos, setTodos] = useState([]);
   const [todoTitle, setTodoTitle] = useState('');

   const handleInputChange = (e) => {
      switch (e.target.name) {
         case 'title':
            setTodoTitle(e.target.value);
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
         setTodos([...todos, newTodo]);
         setNewTodo('');
      }
   }

   useEffect(() => {
      console.log(todos);
   }, [todos])

   return (
      <>
         <div className='newtodo-container'>
            <input 
               type='text'
               value={newTodo}     
               onChange={handleInputChange}
               name='todo-content'
            />
            <input 
               type='text'
               value={todoTitle}     
               onChange={handleInputChange}
               name='title'
            />
            <button onClick={handleClick}>Submit</button>
         </div>
         <div className='todo-container'>
            {todos.map(todo => {
               return <Todobox item={todo}/>;
            })}
         </div>
      </>
   )
}

export default Todo;