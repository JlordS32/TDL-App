import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

import '../../styles/dialog.modules.css';

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

const Modal = ({handleClose, id}) => {
     
   // const { title, content } = todo;

   return (
      <Backdrop onClick={handleClose}>
         <motion.div
            className='modal-container'
            onClick={e => e.stopPropagation()}
            variants={dropIn}
            initial='visible'
            animate='visible'
            exit='exit'
         >
            <p>{id}</p>
            <button onClick={handleClose}>Close</button>
         </motion.div>
      </Backdrop>
   )
}

export default Modal;