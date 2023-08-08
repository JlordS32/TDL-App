import React from 'react';
import Groups from './Groups';
import Modal from '../../../dialog/Modal';
import styles from '../../../../styles/groups.modal.module.css';

const GroupsModal = ({ dialogRef }) => {
	return (
		<Modal
			dialogRef={dialogRef}
			width={500}
			height={800}
		>
			<div className={styles['groups-modal']}>
				<Groups />
			</div>
		</Modal>
	);
};

export default GroupsModal;
