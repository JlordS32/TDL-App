const PlusIcon = ({
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
			className='feather feather-trash-2'
		>
			<line
				x1='12'
				y1='5'
				x2='12'
				y2='19'
			></line>
			<line
				x1='5'
				y1='12'
				x2='19'
				y2='12'
			></line>
		</svg>
	);
};

export default PlusIcon;
