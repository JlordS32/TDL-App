import React, {useRef} from 'react';
import Modal from '../../../dialog/Modal';
import '../../../../styles/groups.modules.css';

const GroupsModal = ({dialogRef}) => {
	return (
		<Modal
			dialogRef={dialogRef}
			width={800}
			height={800}
		>
			<div>GroupsModal</div>
		</Modal>
	);
};

export default GroupsModal;
