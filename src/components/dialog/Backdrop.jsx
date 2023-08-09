import React from 'react';
import '../../styles/todo.modal.modules.css';

import { motion } from 'framer-motion';

const Backdrop = ({children, onClick}) => {
   return (
      <motion.div    
         className='backdrop-container'
         onClick={onClick}
         initial={{
            opacity: 0 
         }}
         animate={{
            opacity: 1
         }}
         exit={{
            opacity: 0
         }}
      >
         {children}
      </motion.div>
   )
};

export default Backdrop;