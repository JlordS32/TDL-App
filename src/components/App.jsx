import '../styles/app.modules.css'

import { 
   createContext,
   useState
} from 'react';

import Todo from './home/Todo';
import Header from './header/Header';
import Nav from './header/Nav';
import Modal from './dialog/Modal';

import { motion, AnimatePresence } from 'framer-motion';

export const ModalContext = createContext();

const App = () => {


   const [modalOpen, setModalOpen] = useState(false);
   const [modalTodo, setModalTodo] = useState([]);

   // Toggle modal functions 
   const close = () => setModalOpen(false);
   const open = () => {
      setModalOpen(true);
   };

   console.log('hello world');

   return (
      <ModalContext.Provider 
         value={{
            open, 
            close, 
            modalOpen,
            setModalTodo
         }}>
         <div className='app'>
            {/* <Nav /> */}
            <Header />
            <Todo />
            <AnimatePresence>
               {modalOpen && (
                     <motion.div
                        initial={{scale: 0.5}}
                        animate='open'
                        exit={{scale: 0}}
                     >
                        <Modal   
                           modalOpen={modalOpen} 
                           handleClose={close}
                           todo={modalTodo}
                        />
                     </motion.div>
                  )
               }
            </AnimatePresence>
         </div> 
      </ModalContext.Provider>
   )
}

export default App;