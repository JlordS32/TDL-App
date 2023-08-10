const CheckIcon = ({
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
			<polyline points='20 6 9 17 4 12'></polyline>
		</svg>
	);
};

export default CheckIcon;
