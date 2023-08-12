
import { v4 as uuidv4 } from 'uuid';

// groupUtils.js
export const addGroup = (newGroup, groupRedux, updateGroup) => {
	if (newGroup.trim() !== '') {
		const updatedGroups = [
			...groupRedux,
			{
				name: newGroup,
				id: uuidv4(),
				isEditing: false,
			},
		];
		updateGroup(updatedGroups);
	}
};

export const deleteGroup = (groupId, groupRedux, updateGroup) => {
	const updatedGroups = groupRedux.filter((group) => group.id !== groupId);
	updateGroup(updatedGroups);
};

export const editGroup = (groupId, groupRedux, newGroupName, updateGroup) => {
	const updatedGroups = groupRedux.map((group) => {
		if (group.id === groupId) {
			return {
				...group,
				name: newGroupName.trim() !== '' ? newGroupName : group.name,
				isEditing: group.isEditing ? false : true,
			};
		}
		return group;
	});
	updateGroup(updatedGroups);
};
