import '../styles/app.modules.css'

import { 
   createContext, 
   useState
} from 'react';

import Todo from './home/Todo';
import Header from './header/Header';
import Nav from './header/Nav';
import Modal from './dialog/Modal';

export const ModalContext = createContext();

const App = () => {


   const [modalOpen, setModalOpen] = useState(false);
   const [modalTodo, setModalTodo] = useState([]);

   // Toggle modal functions 
   const close = () => setModalOpen(false);
   const open = () => {
      setModalOpen(true);
   };

   return (
      <ModalContext.Provider 
         value={{
            open, 
            close, 
            modalOpen,
            setModalTodo
         }}>
         <div className='app'>
            <Nav />
            <Header />
            <Todo />
            {modalOpen && 
               <Modal   
                  modalOpen={modalOpen} 
                  handleClose={close}
                  todo={modalTodo}
            />}
         </div>
      </ModalContext.Provider>
   )
}

export default App;