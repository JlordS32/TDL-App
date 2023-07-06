import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

import '../../styles/dialog.modules.css';

const Modal = ({handleclose, text}) => {
   return (
      <motion.div
         className='modal-container'
         onClick={e => e.stopPropagation()}
      >

      </motion.div>
   )
}

export default Modal;