const XIcon = ({
  width = "24",
  height = "24",
  strokWidth = "2",
  fill = "none",
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill={fill}
      stroke='currentColor'
      strokeWidth={strokWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-menu'>
      <line x1='18' y1='6' x2='6' y2='18'></line>
  <line x1='6' y1='6' x2='18' y2='18'></line>
    </svg>
  );
};

export default XIcon;
