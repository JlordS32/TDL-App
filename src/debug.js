const value = [
	{
		id: '',
		title: '',
		content: '',
		group: '',
		complete: false,
	},
  {
		id: '',
		title: '',
		content: '',
		group: '',
		complete: false,
	},
];

// Create a new object by spreading the properties of 'value' and adding an extra property
const newValue = value.map(item => ({
  ...item,
  newProperty: '',
}));

console.log(newValue);
