import '../styles/app.modules.css'

import { 
   createContext, 
   useState,
   useContext
} from 'react';

import Todo from './home/Todo';
import Header from './header/Header';
import Nav from './header/Nav';
import Modal from './dialog/Modal';
import { TodoBoxContext } from './home/TodoBox';

export const ModalContext = createContext();

const App = () => {


   const [modalOpen, setModalOpen] = useState(false);
   const { id } = useContext(TodoBoxContext);

   // Toggle modal functions 
   const close = () => setModalOpen(false);
   const open = () => setModalOpen(true);

   return (
      <ModalContext.Provider 
         value={{
            open, 
            close, 
            modalOpen
         }}>
         <div className='app'>
            <Nav />
            <Header />
            <Todo />

            // If list is clicked, modal is opened
            {modalOpen && 
               <Modal   
                  modalOpen={modalOpen} 
                  handleClose={close}
                  id={id}
               />}
         </div>
      </ModalContext.Provider>
   )
}

export default App;