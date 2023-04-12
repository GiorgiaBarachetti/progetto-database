import './buttonCss.css';
import { useState } from 'react';

const Button = () => {

    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const boxStyle = {
        backgroundColor: isHover ? 'lightblue' : 'white',
        color: isHover ? 'white': 'lightblue',
        fontWeight: 'bold',
        margintop: '25px',
        border: 'none',
        padding: '10px',
        marginTop: '20px',
        width: '150px',
        borderRadius: '5px',
        border: '2px solid white'
   };

    return <button className="box"
    style={boxStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}

           >SUBMIT</button>
}

export default Button;