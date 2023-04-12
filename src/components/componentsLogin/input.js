
import React from 'react';


const Input = ({ label, error, ...rest }) => {
  return (
        <div>
                    
            <label style={{ fontSize: '14px', color: 'white', fontWeight: 'bold'}}>{label}</label>
            <br></br>
            <input
                style={{
                    padding: '10px',
                    border: '1px solid lightblue',
                    
                }}
                {...rest}
                />
            <div style={{ color: 'red' }}>{error}</div>
        </div>
    
  );
};

export default Input;



/*
import {FormControl, FormLabel, Form, Button} from 'react-bootstrap';

const Input = (placeholder='string', padding, label, type) => {

    return <Form>
                <FormLabel>{label}</FormLabel>
                <FormControl type={type}/>
           </Form>
}
Input.defaultProps = {
    label: string,

}


export default Input;
*/