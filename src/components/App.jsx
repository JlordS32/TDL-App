import '../styles/app.modules.css'

import NewTodo from './home/Todo';
import Header from './header/Header';
import Nav from './header/Nav';

// This is a change made from the office.

const App = () => {

   return (
      <div className='app'>
         <Nav />
         <Header />
         <NewTodo />
      </div>
   )
}

export default App;