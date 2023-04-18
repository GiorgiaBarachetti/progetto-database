import { useState } from 'react';

const Button = ({ onClick, label, color, ...rest }) => {

   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };
/*
   const hover = ()=>{
      if(standard){
         return isHover ? 'white' : 'lightblue'
      }
      return isHover ? 'white' : 'lightblue'
   }
*/

   const boxStyle = {
        backgroundColor: isHover ? 'lightblue' : 'white',
        //aggiungi qua hover 
        //color: hover(),
        color: isHover ? 'white' : 'lightblue',
        fontWeight: 'bold',
        margintop: '25px',
        padding: '10px',
        marginTop: '10px',
        width: '150px',
        borderRadius: '5px',
        border: '2px solid white'
   };
//puoi rimuoverlo
   const handleClick = () => {
      onClick && onClick();
   };

    return <button
               style={boxStyle}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={handleClick}
               {...rest}
           >{label}</button>
}

export default Button;