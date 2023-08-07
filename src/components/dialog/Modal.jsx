import '../../styles/modal.modules.css';
import React from 'react';
import XIcon from '../../assets/icons/XIcon';

const Modal = ({ dialogRef, children, width, height }) => {
	// test
	return (
		<dialog
			style={{
				position: 'fixed',
				margin: 'auto',
				width: `${width}px`,
				height: `${height}px`,
			}}
			ref={dialogRef}
			className='dialog-modal-container'
		>
			<div
				onClick={() => {
					dialogRef.current.close();
				}}
				className='close-btn'
			>
				<XIcon width='24' height='24'/>
			</div>
			{children}
		</dialog>
	);
};

export default Modal;
