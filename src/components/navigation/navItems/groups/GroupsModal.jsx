import React, {useRef} from 'react';
import Modal from '../../../dialog/Modal';
import styles from '../../../../styles/groups.modal.module.css';

const GroupsModal = ({dialogRef}) => {
	return (
		<Modal
			dialogRef={dialogRef}
			width={800}
			height={800}
		>
			<div className={styles['groups-modal']}>GroupsModal</div>
		</Modal>
	);
};

export default GroupsModal;
