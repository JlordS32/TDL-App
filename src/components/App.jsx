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
   const [id, setId] = useState('');

   // Toggle modal functions 
   const close = () => setModalOpen(false);
   const open = () => {
      setModalOpen(true);
      console.log(id);
   };

   return (
      <ModalContext.Provider 
         value={{
            open, 
            close, 
            modalOpen,
            setId
         }}>
         <div className='app'>
            <Nav />
            <Header />
            <Todo />
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