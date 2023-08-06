import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import '../../styles/dialog.modules.css';

import React, { useContext } from 'react';
import { ModalContext } from '../App';

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
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: '0',
	},
};

const Modal = () => {
	const { close } = useContext(ModalContext);

	return (
		<Backdrop
			onClick={close}
			key={id}
		>
			<motion.div className='modal-container-linear-outline'>
				<motion.div
					className='modal-container'
					onClick={(e) => e.stopPropagation()}
					variants={dropIn}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					style={{
						scale: 1,
					}}
				>
					<h1>This is my Modal</h1>
				</motion.div>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
