const MoreIcon = ({ 
   color='white', 
   width = '24', 
   height = '24',
   strokWidth = '2',
   fill='none'}) => {
   return (
      <svg 
         xmlns="http://www.w3.org/2000/svg" width={width} 
         height={height}
         viewBox="0 0 24 24" 
         fill={fill}
         stroke={color}
         strokeWidth={strokWidth}
         strokeLinecap="round"
         strokeLinejoin="round"

         className="feather feather-more-vertical">
         <circle cx="12" cy="12" r="1"></circle>
         <circle cx="12" cy="5" r="1"></circle>
         <circle cx="12" cy="19" r="1"></circle>
      </svg>
   )
};

export default MoreIcon;