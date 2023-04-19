import React from 'react';
import Spacer from './spacer';

const Input = ({ label, error, ...rest }) => {
  return (
        <div>
                    
            <label style={{ fontSize: '14px', color: 'white', fontWeight: 'bold'}}>{label}</label>
            <br></br>
            <input
                style={{
                    padding: '10px',
                    border: '1px solid lightblue',
                    borderRadius: '5px'
                }}
                {...rest}
                ></input>
                <Spacer height={3}/>
            <div style={{ color: 'white', backgroundColor:'red', borderRadius:'5px', textAlign:'center', }}>{error}</div>
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