import React from 'react';
import Groups from './Groups';
import Modal from '../../../dialog/Modal';
import styles from '../../../../styles/groups.modal.module.css';

const GroupsModal = ({ dialogRef }) => {
	return (
		<Modal
			dialogRef={dialogRef}
			width={600}
			height={700}
		>
			<div className={styles['groups-modal']}>
				<Groups />
			</div>
		</Modal>
	);
};

export default GroupsModal;
