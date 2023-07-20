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
import Search from './home/Search';
export const ModalContext = createContext();

const App = () => {


   const [modalOpen, setModalOpen] = useState(false);
   const [selectedTodo, setSelectedTodo] = useState([]);
   const [toggleNav, setToggleNav] = useState(false);

   // Toggle modal functions 
   const close = () => setModalOpen(false);
   const open = () => {  
      setModalOpen(true);
   };
674776
   return (
      <ModalContext.Provider 
         value={{
            open, 
            close, 
            modalOpen,
            setSelectedTodo
         }}>
         <div className='app'>
            <Header toggle={() => setToggleNav(toggleNav ? false : true)}/>
            {/* Main Home */}
            <div className='home-container'>
               <Nav />
               <Search />
               <Todo/>
            </div>
            {modalOpen && (
                     <div>
                        <Modal   
                           modalOpen={modalOpen} 
                           handleClose={close}
                           selectedTodo={selectedTodo}
                        />
                     </div>
                  )
               }
         </div> 
      </ModalContext.Provider>
   )
};

export default App;