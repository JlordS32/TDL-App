import React, {
   useState,
   useEffect
} from 'react';
import Todobox from './TodoBox';

import '../../styles/todo.modules.css';''

const Todo = () => {

   const [newTodo, setNewTodo] = useState('');
   const [todos, setTodos] = useState([]);

   const handleInputChange = (e) => {
      setNewTodo(e.target.value);
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