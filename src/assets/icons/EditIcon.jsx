const EditIcon = ({
	color = 'white',
	width = '24',
	height = '24',
	strokWidth = '2',
	fill = 'none',
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill={fill}
			stroke={color}
			strokeWidth={strokWidth}
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-edit'
		>
			<path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
			<path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
		</svg>
	);
};

export default EditIcon;
