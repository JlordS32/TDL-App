import styles from '../../styles/modal.module.css';
import React, { useEffect } from 'react';
import XIcon from '../../assets/icons/XIcon';

const Modal = ({ dialogRef, children, width, height }) => {

	return (
		<dialog
			style={{
				position: 'fixed',
				margin: 'auto',
				width: `${width}px`,
				height: `${height}px`,
			}}
			ref={dialogRef}
			className={styles['dialog-modal-container']}
		>
			<div
				onClick={() => {
					dialogRef.current.close();
				}}
				className={styles['close-btn']}
			>
				<XIcon
					width='24'
					height='24'
				/>
			</div>
			{children}
		</dialog>
	);
};

export default Modal;
