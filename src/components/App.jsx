import React from 'react';
import '../styles/app.modules.css'

import NewTodo from './home/Todo';
import Nav from './header/Nav';


const App = () => {

   return (
      <div className='app'>
         <Nav />
         <NewTodo />
      </div>
   )
}

export default App;