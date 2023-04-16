import { useState } from 'react';

const Button = ({ onClick, label, color }) => {

   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const boxStyle = {
        backgroundColor: isHover ? 'lightblue' : 'white',
        color: isHover ? {color}: {color},
        fontWeight: 'bold',
        margintop: '25px',
        padding: '10px',
        marginTop: '20px',
        width: '150px',
        borderRadius: '5px',
        border: '2px solid white'
   };

   const handleClick = () => {
      onClick && onClick();
   };

    return <button
               style={boxStyle}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={handleClick}
           >{label}</button>
}

export default Button;