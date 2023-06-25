import React, {
   useState,
   useEffect
} from 'react';
import '../styles/app.modules.css'

import Todobox from './home/TodoBox';

const App = () => {

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
      <div className='app'>
         <input 
            type='text'
            value={newTodo}     
            onChange={handleInputChange}
         />
         <button onClick={handleClick}>Submit</button>
         <div className='todolist-container'>
            {todos.map(todo => {
               return <Todobox item={todo}/>;
            })}
         </div>
      </div>
   )
}

export default App;