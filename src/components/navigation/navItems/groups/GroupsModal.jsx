import React, { useMemo } from 'react';
import Modal from '../../../dialog/Modal';
import styles from '../../../../styles/groups.modal.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupLabels } from '../../../store/TodoReducer';
import { useAutoAnimate } from '@formkit/auto-animate/react';

//Icons
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import PlusIcon from '../../../../assets/icons/PlusIcon';

const GroupsModal = ({ dialogRef }) => {
	const groupRedux = useSelector((state) => state.groupLabelReducer.value);
	const dispatch = useDispatch();

	const [parent] = useAutoAnimate();

	return (
		<Modal
			dialogRef={dialogRef}
			width={600}
			height={700}
		>
			<div className={styles['groups-modal']}>
				<div className={styles['search-bar']}>
					<input className='add-btn' />
					<div
						style={{
							color: 'black',
						}}
					>
						<PlusIcon width='30' />
					</div>
				</div>
				<div className={styles['labels']} ref={parent}>
					{useMemo(() => {
						return groupRedux.map((group) => (
							<div
								className={styles['label']}
								key={group.id}
							>
								<h4>{group.name}</h4>
								<div className={styles['icons']}>
									<div className={styles['edit']}>
										<EditIcon
											width='22'
											height='22'
										/>
									</div>
									<div className={styles['delete']}>
										<DeleteIcon
											width='22'
											height='22'
										/>
									</div>
								</div>
							</div>
						));
					})}
				</div>
			</div>
		</Modal>
	);
};

export default GroupsModal;
