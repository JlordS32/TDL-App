import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

import '../../styles/dialog.modules.css';

import { useState } from 'react';

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

const Modal = ({handleClose, todo}) => {

   // Destructing passed array from App component
   const { title, content, id } = todo;

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
   }

   // Default values
   const defaultModalTitle = title;
   const defaultModalContent = content;

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
                     defaultValue={defaultModalTitle}
                     type='text'
                     className='modal-title-input'
                     name='title'
                     onChange={handleOnChange}
                  />
                  <textarea 
                     defaultValue={defaultModalContent}
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