import React, {
   useState
} from 'react';
import '../../styles/home.modules.css'


const Todobox = ({item}) => {
   return (
      <div className='todo-box-container'>
         <div className='todo-box'>
            {item}
         </div>
      </div>
   )
}

export default Todobox;