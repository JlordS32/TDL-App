import '../styles/app.modules.css'

import { createContext, useState } from 'react';

import NewTodo from './home/Todo';
import Header from './header/Header';
import Nav from './header/Nav';
import Modal from './dialog/Modal';

export const ModalContext = createContext();

const App = () => {


   const [modalOpen, setModalOpen] = useState(false);

   // Toggle modal functions 
   const close = () => setModalOpen(false);
   const open = () => setModalOpen(true);

   return (
      <ModalContext.Provider value={{open, close, modalOpen}}>
         <div className='app'>
            <Nav />
            <Header />
            <NewTodo />

            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text={'hello world'} />}
         </div>
      </ModalContext.Provider>
   )
}

export default App;