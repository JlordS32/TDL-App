import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/todo.dialog.modules.css';

const Dialog = ({ isOpen, onClose }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='dialog-overlay'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
				>
					<motion.div
						className='dialog-content'
						initial={{ y: '-100%' }}
						animate={{ y: '0%' }}
						exit={{ y: '-100%' }}
					>
						<button
							className='close-button'
							onClick={onClose}
						>
							Close
						</button>
						<ul>
							<li>List 1</li>
							<li>List 2</li>
							<li>List 3</li>
						</ul>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Dialog;
