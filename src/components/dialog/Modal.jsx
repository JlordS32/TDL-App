import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

import '../../styles/dialog.modules.css';

import { useEffect, useState } from 'react';

const dropIn = {
   hidden: {
      y: '-100vh',
      opacity: '0',
   },
   visible: {
      y: '0',
      transition: {
         duration: 0.2,
         type: 'spring',
         damping: 25,
         stiffness: 500
      }
   },
   exit:{
      y: '100vh',
      opacity: '0',
   }
};

const Modal = ({ handleClose, todo, currentTodo }) => {

   // Destructing passed array from App component
   const { title, content, id } = todo;

   // Default values
   const defaultValue = {
      title: title,
      content: content
   }

   // STATES
   const [ modalTitle, setModalTitle] = useState('')
   const [ modalContent, setModalContent] = useState('')

   const handleOnChange = (e) => {
      switch (e.target.name) {
         case 'title':
            setModalTitle(e.target.value);
           break;
         case 'todo-content':
            setModalContent(e.target.value);
           break;
         default:
           return;
       }
   };

   const updatedTodo = currentTodo.map((todo) => {
      if (todo.id === id) {
         return {...todo, title: modalTitle, content: modalContent}
      }
      return todo;
   });

   return (
      <Backdrop onClick={handleClose} key={id}>
         <div className='modal-container-linear-outline'>
            <motion.div
               className='modal-container'
               onClick={e => e.stopPropagation()}
               variants={dropIn}
               initial='visible'
               animate='visible'
               exit='exit'
            >
               <div className='modaltodo-content'>
                  <input 
                     defaultValue={defaultValue.title}
                     type='text'
                     className='modal-title-input'
                     name='title'
                     onChange={handleOnChange}
                     placeholder='Enter title...'
                  />
                  <textarea 
                     defaultValue={defaultValue.content}
                     className='modal-content-input'
                     name='todo-content'
                     onChange={handleOnChange}
                  />
               </div>
            </motion.div>
         </div>
      </Backdrop>
   )
}

export default Modal;