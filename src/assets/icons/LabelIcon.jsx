const LabelIcon = ({
  color = "white",
  width = "24",
  height = "24"
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="m21 12l-4.35 6.15q-.275.4-.712.625T15 19H5q-.825 0-1.413-.588T3 17V7q0-.825.588-1.413T5 5h10q.5 0 .938.225t.712.625L21 12Zm-2.45 0L15 7H5v10h10l3.55-5ZM5 12v5V7v5Z"
      />
    </svg>
  );
};

export default LabelIcon;
