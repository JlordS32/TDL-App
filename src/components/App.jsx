import '../styles/app.modules.css'
import { 
   createContext,
   useEffect,
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
            <Todo/>
            <AnimatePresence>
               {modalOpen && (
                     <motion.div
                        initial={{scale: 0.5}}
                        animate={{scale: 1}}
                        exit={{scale: 0}}
                     >
                        <Modal
                           handleClose={close}
                           todo={modalTodo}
                        />
                     </motion.div>
                  )
               }
            </AnimatePresence>
            {modalOpen && (
                  <div>
                     <Modal   
                        modalOpen={modalOpen} 
                        handleClose={close}
                        todo={modalTodo}
                     />
                  </div>
               )
            }
         </div> 
      </ModalContext.Provider>
   )
};

export default App;