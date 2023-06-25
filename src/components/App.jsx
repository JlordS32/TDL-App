import React, {
   useState,
   useEffect
} from 'react';

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
         <div className='todolist'>
            {todos.map(todo => {
               return <div>{todo}</div>;
            })}
         </div>
      </div>
   )
}

export default App;